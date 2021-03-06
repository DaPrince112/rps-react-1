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
        
       expect(text).toEqual(0);
    })
    
})

describe('Last Name Test', () =>{
    it('Checks for text in the last name box', () =>{
        const wrapper = shallow(<Signup />);
        
       expect(text).toEqual(0);
    })
    
})

describe('Email Test', () =>{
    it('Checks for text in the email box', () =>{
        const wrapper = shallow(<Signup />);
        
       expect(text).toHaveLength(0);
    })
    
})

describe('Username Test', () =>{
    it('Checks for text in the username box', () =>{
        const wrapper = shallow(<Signup />);
        
       expect(text).toHaveLength(0);
    })
    
})

describe('Password Test', () =>{
    it('Checks for text in the password box', () =>{
        const wrapper = shallow(<Signup />);
        const userField = wrapper.find('input.username');
        expect(text).toHaveLength(0);
    })
    
})

describe('Confirm Password Test', () =>{
    it('Checks for text in the password box', () =>{
        const wrapper = shallow(<Signup />);
        const passwordfield = wrapper.find('input.confirm');
        expect(text).toHaveLength(0);
    })
    
})

