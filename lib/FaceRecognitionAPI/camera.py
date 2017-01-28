import cv2
import threading
import time

class Camera(object):

  def __init__(self):
    # camera configuration
    self.DEVICE_ID = 0
    self.CAPTURE_RATE = 30.0

    # Initialize camera
    self.camera = cv2.VideoCapture(self.DEVICE_ID)
    if not self.camera.isOpened():
      self.camera.open()

    self.CAPTURE_FRAME = None
    self.CAPTURE_LOCK = threading.Lock()
    self.CAPTURE_THREAD = threading.Thread(target=self.grab_frames)
    self.CAPTURE_THREAD.daemon = True
    self.CAPTURE_THREAD.start()


  def grab_frames(self):
    while True:
      retval, frame = self.camera.read()
      with self.CAPTURE_LOCK:
          self.CAPTURE_FRAME = None
          if retval:
              self.CAPTURE_FRAME = frame
      time.sleep(1.0 / self.CAPTURE_RATE)

  def get_frame(self):
    frame = None
    while frame is None:
        time.sleep(0)
        with self.CAPTURE_LOCK:
            frame = self.CAPTURE_FRAME
    return frame
