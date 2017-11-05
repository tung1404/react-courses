import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Text from "./Text";

describe(Text, () => {
  // Add the rest of our tests here later!
  it("renders without crashing", () => {
    const name = "Person";
    const mockRemoveGreeting = jest.fn();
    const component = shallow(
      <Text ten={name} removeGreeting={mockRemoveGreeting} />
    );
    it("modifies the greeting when frenchify button is clicked", () => {
      component.find("button.frenchify").simulate("click");
      expect(component.text()).toContain("Bonjour");
    });
  });

  it("renders and matches our snapshot", () => {
    const component = renderer.create(<Text ten="Person" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
