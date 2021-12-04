import App from "./App"
import Form from "./components/Form/Form";
import FormList from "./components/FormList/FormList";
import Account from "./components/Account/Account";

import { shallow, mount } from "enzyme"

// snapshot
import toJson from "enzyme-to-json"


// To run Jest in watch mode, you can run 
// npm test -- --watch or jest --watch

// entire component 
describe("The components are rendered", () => {
          shallow (<App />)
});

/*
Skipping or isolating a test means that when Jest runs, 
a specific marked test is not run.
You can also use it.only()

it.skip("renders without crashing", () => {
          shallow(<App />);
});
*/ 

it("renders Form component without crashing", () => {
          shallow(<Form />);
});


it("renders FormList component without crashing", () => {
          shallow(<FormList />);
});


//  a specific part of d compont:
//  checks if the title is rendered in the App component
it("renders title without crashing", () => {
          const wrapper = shallow(<App />)

          const header = <h1> Display Active Users Account Details </h1>

          expect(wrapper.contains(header)).toBe(true)
});


it("renders form inputs", () => {
          const wrapper = shallow(<Form />)

          expect(wrapper.find('input[name="volunteerName"]')).toHaveLength(1);

          expect(wrapper.find('input[name="hours"]')).toHaveLength(1)

          expect(wrapper.find('select[name="jobTitle"]')).toHaveLength(1)
})


it("renders submit button without crashing", () => {
          const wrapper = shallow(<Form />)

          const label = wrapper.find("#submit-button").text();

          expect(label).toBe("Submit")
})


/*
Mocking Function:
There are two ways to mock a function: either by creating a 
mock function to use it in test code, or by writing a manual 
mock to override a module dependency.

For example, instead of accessing a remote resource, like 
a website or a database, you might want to create a manual 
mock that allows you to use fake data.
*/ 

const user = {
	username: "Dave",
	
          name: "Adeneye David",

	email: "david@gmail.com",
};

describe("Account is passing props", () => {

          it("accepts user account props", () => {
                    const wrapper = mount(<Account user={user} />);

                    expect(wrapper.props().user).toEqual(user);
          });

          it("contains users account email", () => {
                    const wrapper = mount(<Account user={user} />);

                    const value = wrapper.find("p").text();

                    expect(value).toEqual("david@gmail.com");
          });
})


// snapshot testing: It is used to keep track of changes in an app’s UI.
it("renders correctly", () => {
          const tree = shallow(<App />)

          expect(toJson(tree)).toMatchSnapshot();
})

/* When the test above runs successfully, the current 
UI component will be compared to the existing one.

When the test suite runs, a new snapshot will be generated 
and saved to the __snapshots__ folder. When we run a test 
subsequently, Jest will check whether the components match 
the snapshot.
*/
