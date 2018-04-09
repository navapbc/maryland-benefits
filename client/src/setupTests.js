import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure
configure({ adapter: new Adapter() });

// Mock out local storage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
global.localStorage = localStorageMock
