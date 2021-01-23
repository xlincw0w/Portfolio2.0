import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Layout/Header/header'

configure({ adapter: new Adapter() })

describe('<Header /> Tests', () => {
    const wrapper = shallow(<Header />)

    it('Contact submit handler', () => {})

    it('Testing modal', () => {
        expect(wrapper.find('input[type="email"]').length).toEqual(0)
        expect(wrapper.find('input[type="text"]').length).toEqual(0)

        wrapper.find('#contact-me-button').simulate('click')

        // expect(wrapper.find('input[type="email"]').length).toEqual(1)
        // expect(wrapper.find('input[type="text"]').length).toEqual(3)
    })
})
