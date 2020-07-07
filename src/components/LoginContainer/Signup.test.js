import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';


describe('Header test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Signup />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('First Name Test', () =>{
    it('checks for text in the first name box', () =>{
        const wrapper = shallow(<Signup />);
        const text = wrapper.find('').text();
       expect(text).toEqual('');
    })
    
})

describe('Last Name Test', () =>{
    it('Checks for text in the last name box', () =>{
        const wrapper = shallow(<Signup />);
        const text = wrapper.find('').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Email Test', () =>{
    it('Checks for text in the email box', () =>{
        const wrapper = shallow(<Signup />);
        const text = wrapper.find('').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Username Test', () =>{
    it('Checks for text in the username box', () =>{
        const wrapper = shallow(<Signup />);
        const text = wrapper.find('').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Password Test', () =>{
    it('Checks for text in the password box', () =>{
        const wrapper = shallow(<Signup />);
        const text = wrapper.find('').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Confirm Password Test', () =>{
    it('Checks for text in the password box', () =>{
        const wrapper = shallow(<Signup />);
        const text = wrapper.find('').text();
       expect(text).toEqual('Signup');
    })
    
})

