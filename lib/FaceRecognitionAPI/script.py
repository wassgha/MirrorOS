from PIL import Image
from StringIO import StringIO
import numpy as np
import urllib
import json
import cv2
import os
import random
import uuid
import time
import camera
import sys
import sqlite3

#set debug mode
DEBUG_MODE = False
REFRESH_INTERVAL = 0.5

# define the path to the face detector and smile detector
FACE_DETECTOR_PATH = "{base_path}/cascades/haarcascade_frontalface_default.xml".format(
	base_path=os.path.abspath(os.path.dirname(__file__)))

SMILE_DETECTOR_PATH = "{base_path}/cascades/haarcascade_smile.xml".format(
	base_path=os.path.abspath(os.path.dirname(__file__)))

# path to trained faces and labels
TRAINED_FACES_PATH = "{base_path}/faces".format(
	base_path=os.path.abspath(os.path.dirname(__file__)))

# maximum distance between face and match
THRESHOLD = 75

# create the cascade classifiers
detector = cv2.CascadeClassifier(FACE_DETECTOR_PATH)
smiledetector = cv2.CascadeClassifier(SMILE_DETECTOR_PATH)

# Initialize camera
camera = camera.Camera()

# Initialize database
conn = sqlite3.connect('database.db')

c = conn.cursor()

# c.execute('''CREATE TABLE users
#              (id int, first_name text, last_name text, username text, email text)''')
# c.execute("INSERT INTO users VALUES (1,'Wassim','Gharbi','gharbiw','gharbiw@lafayette.edu')")
# conn.commit()
# conn.close()
# exit()

def get_images_and_labels(path):
    # images will contains face images
    images = []
    # labels will contains the label that is assigned to the image
    labels = []
    user_paths = [f for f in os.listdir(path) if not f.endswith('.DS_Store')]
    for user_path in user_paths:
      # Append all the absolute image paths in a list image_paths
      image_paths = [os.path.join(os.path.join(path, user_path), f) for f in os.listdir(os.path.join(path, user_path)) if not f.endswith('.DS_Store')]
      for image_path in image_paths:
          # Read the image and convert to grayscale
          image_pil = Image.open(image_path).convert('L')
          # Convert the image format into numpy array
          image = np.array(image_pil, 'uint8')
          # Detect the face in the image
          faces = detector.detectMultiScale(image, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30), flags=0)
          # If face is detected, append the face to images and the label to labels
          for (x, y, w, h) in faces:
              images.append(image[y: y + h, x: x + w])
              labels.append(int(user_path))
              #cv2.imshow("Adding faces to traning set...", image[y: y + h, x: x + w])
              #cv2.waitKey(50)
      # return the images list and labels list
    return images, labels

recognizer = cv2.face.createLBPHFaceRecognizer()
images, labels = get_images_and_labels(TRAINED_FACES_PATH)
recognizer.train(images, np.array(labels))

def recognize():
  # initialize the data dictionary to be returned
  data = {}
  image = camera.get_frame()
  # convert the image to grayscale, load the face cascade detector,
  # and detect faces in the image
  image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  rects = detector.detectMultiScale(image, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30), flags=0)

  # construct a list of bounding boxes from the detection
  rects = [(int(x), int(y), int(x + w), int(y + h)) for (x, y, w, h) in rects]
  if len(rects) == 0:
    data.update({"detected": False})
  else :
    x, y, w, h = rects[0]
    recognizer.setThreshold(THRESHOLD)
    identity = recognizer.predict(image[y:h, x:w])
    #cv2.imwrite( TRAINED_FACES_PATH + "/" +  str(random.randint(1, 10)) + ".jpg", image[y:h, x:w] );
    smile = smiledetector.detectMultiScale(
    image[y:h, x:w],
    scaleFactor= 1.7,
    minNeighbors=30,
    minSize=(30, 30),
    flags=0)
    smiling = False if len(smile) != 1 else True

    if DEBUG_MODE:
      smiles = [(int(x1), int(y1), int(x1 + w1), int(y1 + h1)) for (x1, y1, w1, h1) in smile]
      image = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)
      cv2.rectangle(image, (x, y), (w, h), (0, 255, 0), 2, 8, 0)
      for (x1, y1, w1, h1) in smiles:
        cv2.rectangle(image, (x1 + x , y1 + y), (w1 + x, h1 + y), (255, 0, 0), 2, 8, 0)
      cv2.imshow('image', image)
      cv2.waitKey(0)
      cv2.destroyAllWindows()

    c.execute("SELECT * FROM users where id='%s'" % identity)
    u = c.fetchone()
    if u == None :
      user = {}
    else :
      user = {
        "first_name" : u[1],
        "last_name" : u[2],
        "username" : u[3],
        "email" : u[4],
        "id" : u[0],
      }

    # update the data dictionary with the faces detected
    if DEBUG_MODE:
      data.update({"detected": True, "identity": identity, "user": user, "smiles" : smiles, "box": rects, "smiling": smiling})
    else :
      data.update({"detected": True, "identity": identity, "user": user, "smiling": smiling})

  return data

def train(request):
  data = {"success" : True}
  # check to see if this is a post request
  if request.method == "POST":
    # check to see if an image was uploaded
    if request.POST.get("imageBase64", None) is not None and request.POST.get("user", None) is not None :
      # grab the uploaded image
      image = _grab_image(base64_string=request.POST.get("imageBase64", None))
      image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
      rects = detector.detectMultiScale(image, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30), flags=0)

      # construct a list of bounding boxes from the detection
      rects = [(int(x), int(y), int(x + w), int(y + h)) for (x, y, w, h) in rects]
      if len(rects) == 0:
        data = {"error" : "No faces detected"}
      else :
        x, y, w, h = rects[0]
        cv2.imwrite( TRAINED_FACES_PATH + "/" +  str(request.POST.get("user", None)) + "/" + str(uuid.uuid4()) + ".jpg", image[y:h, x:w] );
  try:
    print(json.dumps(data))
  except Exception:
    pass
  # requirement for python_shell
  sys.stdout.flush()

def new(request):
  data = {"success" : True}
  if request.method == "POST":
    if request.POST.get("username", None) is not None and request.POST.get("email", None) is not None:
      user = User.objects.create_user(request.POST.get("username", None), request.POST.get("email", None), '')
      user.first_name = request.POST.get("first_name", None)
      user.last_name = request.POST.get("last_name", None)
      user.save()
      training_folder = os.path.join(TRAINED_FACES_PATH, str(user.pk))
      if not os.path.exists(training_folder):
        os.makedirs(training_folder)
  try:
    print(json.dumps(data))
  except Exception:
    pass
  # requirement for python_shell
  sys.stdout.flush()


def users(request):
  users = [{"first_name" : user.first_name, "last_name": user.last_name, "id" : user.pk} for user in User.objects.all()]
  try:
    print(json.dumps({"users" : users}))
  except Exception:
    pass
  # requirement for python_shell
  sys.stdout.flush()

def _grab_image(path=None, base64_string=None, url=None):
  # if the path is not None, then load the image from disk
  if path is not None:
    image = cv2.imread(path)

  # otherwise, the image does not reside on disk
  else:
    # if the URL is not None, then download the image
    if url is not None:
      resp = urllib.urlopen(url)
      data = resp.read()
      image = np.asarray(bytearray(data), dtype="uint8")
      image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    # if the stream is not None, then the image has been uploaded
    elif base64_string is not None:
      # sbuf = StringIO()
      # sbuf.write(base64.b64decode(base64_string))
      # pimg = Image.open(sbuf)
      # image = cv2.cvtColor(np.array(pimg), cv2.COLOR_RGB2BGR)
      image = base64.b64decode(base64_string)
      image = np.fromstring(image, dtype=np.uint8)
      image = cv2.imdecode(image, 1)
  # return the image
  return image

old_data = None
new_data = None
while True:
    # Sleep for x seconds
    time.sleep(REFRESH_INTERVAL)
    new_data = recognize()
    if DEBUG_MODE or old_data == new_data:
      try:
        print(json.dumps(new_data))
      except Exception:
        pass
    # requirement for python_shell
    sys.stdout.flush()
    old_data = new_data
