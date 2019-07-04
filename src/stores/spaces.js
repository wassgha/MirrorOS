import React, { forwardRef } from 'react';
import { store } from 'react-easy-state';

import Home from '../screens/Home';
import Recent from '../screens/Recent';

const spaces = store({
  all: [Home],
  current: 0,
  refs: [],
  get isEmpty() {
    return spaces.all.length === 0;
  },
  get hidden() {
    return spaces.all.filter(space => space.hidden);
  },
  get hasHidden() {
    return spaces.hidden.length !== 0;
  },
  get allHidden() {
    return spaces.all.every(space => space.hidden);
  },
  set allHidden(hidden) {
    spaces.all.forEach(space => {
      space.hidden = hidden;
    });
  },
  get active() {
    return spaces.refs[spaces.current];
  },
  get render() {
    return spaces.all.map((Space, index) => {
      const AugmentedSpace = forwardRef((props, ref) => (
        <Space ref={ref} {...props} />
      ));
      spaces.refs[index] = React.createRef();
      return (
        <AugmentedSpace
          active={spaces.current === index}
          key={`space-${index}`}
          ref={spaces.refs[index]}
        />
      );
    });
  },
  forwardCommandToActiveSpace(command) {
    console.log('refs', spaces.refs);
    return spaces.active.current.handleCommand(command);
  },
  open(app) {
    let Space;
    switch (app) {
      case 'recent':
        Space = Recent;
        break;
      default:
        return;
    }
    spaces.all.push(Space);
    spaces.current = spaces.all.length - 1;
  },
  close() {
    spaces.current = spaces.current - 1;
    spaces.remove(spaces.current + 1);
  },
  remove(id) {
    spaces.all.splice(id, 1);
  },
  toggle(id) {
    const space = spaces.all[id];
    space.hidden = !space.hidden;
  },
  toggleAll() {
    spaces.allHidden = !spaces.allHidden;
  },
  clearCompleted() {
    spaces.all = spaces.active;
  }
});

export default spaces;
