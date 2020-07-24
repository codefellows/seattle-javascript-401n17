import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Thing from '../../../components/thing/thing.js';

describe('<Thing/>', () => {
  it('is alive at application start', () => {
    let app = shallow(<Thing />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('changes state on click', () => {
    let app = mount(<Thing />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('stuff')).toBe(false);
    expect(app.find('span').text()).toContain('false');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Thing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
