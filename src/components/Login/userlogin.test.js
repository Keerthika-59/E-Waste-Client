import React from 'react';
import { shallow } from 'enzyme';

import UserForm from './userLogin';

describe('Test case for testing login',() =>{
let wrapper;
test('email check',()=>
    {
        wrapper = shallow(<UserForm/>);
        wrapper.find('Field[type="email"]').simulate('change', {target: {name: 'email', value: 'p@mail.com'}});
        expect(wrapper.state('email')).toEqual('p@mail.com');
    })

    // it('password check',()=>{
    //     wrapper = shallow(<UserForm/>);
    //     wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant123'}});
    //     expect(wrapper.state('password')).toEqual('krishankant123');
    // })

    // it('login check with right data',()=>{
    //     wrapper = shallow(<UserForm/>);
    //     wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'krishankantsinghal'}});
    //     wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant123'}});
    //     wrapper.find('button').simulate('click');
    //     expect(wrapper.state('isLogined')).toBe(true);
    // })

    // it('login check with wrong data',()=>{
    //     wrapper = shallow(<UserForm/>);
    //     wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'krishankantsinghal'}});
    //     wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant1234'}});
    //     wrapper.find('button').simulate('click');
    //     expect(wrapper.state('isLogined')).toBe(false);
    // })
})