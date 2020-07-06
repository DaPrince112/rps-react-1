import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../components/LoginContainer/Signup';


describe('Header test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Route path='/signup' component={Signup} />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('First Name Test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Route path='/signup' component={Signup} />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Last Name Test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Route path='/signup' component={Signup} />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Email Test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Route path='/signup' component={Signup} />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Username Test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Route path='/signup' component={Signup} />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Password Test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Route path='/signup' component={Signup} />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
    
})

describe('Confirm Password Test', () =>{
    it('Checks to see if the H1 is accurate', () =>{
        const wrapper = shallow(<Route path='/signup' component={Signup} />);
        const text = wrapper.find('h1').text();
       expect(text).toEqual('Signup');
    })
    
})

