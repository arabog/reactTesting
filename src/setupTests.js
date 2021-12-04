/*
https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/


to install enzyme:
yarn add enzyme
yarn add enzyme-adapter-react-16

yarn add --dev @wojtekmaj/enzyme-adapter-react-17

snapshot
yarn add enzyme-to-json or
npm install --save-dev enzyme-to-json
*/ 


// Configuration of Enzyme to use the adapter

import Enzyme from "enzyme";

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure(
          {
                    adapter: new Adapter() 
          }
);