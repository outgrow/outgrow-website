import React, { Component } from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import datePickerCss from "react-datepicker/dist/react-datepicker.css";
import Head from "../components/head"
import Header from "../components/servicePageHeader"
import Nav from "../components/nav"
import Button from "../components/button"

let DatePicker = () => null;

// Only import react-datepicker if running on client
if (typeof window !== "undefined") {
  DatePicker = dynamic(import("react-datepicker"))
}

const PageWrapper = styled.div`
  padding: 0 1.2rem;
`

const Title = styled.h2`
  color: rgb(250, 250, 250);
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -2px;
  margin: 1.3rem 0;
`

const Overlay = styled.section`
  height: 100%;
  width: 100%;
  padding: 0 1.2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const SectionWithBackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: 50%;
`

const ButtonWrapper = styled.div`
  margin: .5rem auto 0 auto;
`

const Form = styled.form`
  width: 100%;
`

const Label = styled.label`
  display: block;
  
  margin-bottom: .3rem;

  color: rgb(250, 250, 250);
  font-size: 0.9rem;
`

const TextInput = styled.input`
  display: block;
  
  width: 100%;
  height: 1.3rem;

  padding: .8rem .9rem;
  
  border: none;
  border-radius: 15px;
`

const FieldWrapper = styled.div`
  width: 100%;
  min-height: 3.2rem;

  margin: .4rem 0;

  ${props => props.marginRight && "margin-right: .25rem"}
  ${props => props.marginLeft && "margin-left: .25rem"}
`

const DividedFieldWrapper = styled(FieldWrapper)`
  display: flex;
`

const SelectInput = styled.select`
  background: rgb(250, 250, 250);
  color: rgb(11, 11, 11);

  height: 1.3rem;

  padding: .8rem .9rem;
  
  border: none;
  border-radius: 15px;
`

const CheckboxInput = styled.input`

`

const Textarea = styled.textarea`
  width: 100%;

  border: none;
  border-radius: 15px;
`

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      emailAddress: "",
      category: "",
      phoneNumber: "",
      message: "",
      callbackPreferred: true,
      preferredTimeForCallback: new Date()
    }
  }

  handleCallbackPreferredToggle = () => this.setState({ callbackPreferred: !this.state.callbackPreferred })

  handleFieldChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handlePreferredTimeChange = (preferredTimeForCallback) => this.setState({ preferredTimeForCallback })

  handleSubmit = () => {

  }

  render() {
    return (
      <div>
        <Head title="E-Commerce Consultancy | Get a Quote — Contact Our Team Now | out:grow" />
        <Nav />
        
        <SectionWithBackgroundImage style={{ backgroundImage: `url(/static/contact.jpg)` }}>
          <Overlay style={{ backgroundColor: `rgba(51, 151, 246, .57)` }}>
            <Title>Get in touch.</Title>

            <Form onSubmit={this.handleSubmit}>
              <DividedFieldWrapper>
                <FieldWrapper marginRight>
                  <Label htmlFor="emailAddress">E-mail Address</Label>
                  <TextInput
                    id="emailAddress"
                    name="emailAddress"
                    onChange={this.handleFieldChange} 
                    type="email"
                    value={this.state.emailAddress}
                  />
                </FieldWrapper>

                <FieldWrapper marginLeft>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <TextInput
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={this.handleFieldChange}
                    type="tel"
                    value={this.state.phoneNumber}
                  />
                </FieldWrapper>
              </DividedFieldWrapper>

              <DividedFieldWrapper>
                <FieldWrapper marginRight={this.state.callbackPreferred}>
                  <Label htmlFor="callbackPreferred">Call me back</Label>
                  <CheckboxInput
                    id="callbackPreferred"
                    name="callbackPreferred"
                    onChange={this.handleCallbackPreferredToggle}
                    type="checkbox"
                    checked={this.state.callbackPreferred}
                  />
                </FieldWrapper>
                
                {this.state.callbackPreferred &&
                  <FieldWrapper marginLeft>
                    <Label htmlFor="preferredTimeForCallback">Preferred time</Label>
                    <DatePicker
                      id="preferredTimeForCallback"
                      name="preferredTimeForCallback"
                      onChange={this.handlePreferredTimeChange}
                      selected={this.state.preferredTimeForCallback}
                      showTimeSelect
                    />
                  </FieldWrapper> 
                }
              </DividedFieldWrapper>    
        
              <FieldWrapper>
                <Label htmlFor="category">Category</Label>
                <SelectInput
                  id="category"
                  name="category"
                  onChange={this.handleFieldChange}
                  value={this.state.category}
                >
                  <option>Technical Consulting</option>
                  <option>Training</option>
                  <option>Support Plans</option>
                </SelectInput>
              </FieldWrapper>

              

              <FieldWrapper>
                <Label htmlFor="message">Message:</Label>
                <Textarea
                  id="message"
                  name="message"
                  onChange={this.handleFieldChange}
                  value={this.state.message}
                  rows={5}
                />
              </FieldWrapper>
            </Form>
          
            <ButtonWrapper>
              <Button color="1, 111, 185" href="#">Send</Button>
            </ButtonWrapper>
          </Overlay>
        </SectionWithBackgroundImage>

        <style jsx>{datePickerCss}</style> 
        <style>{`
          .react-datepicker-popper {
            transform: translate3d(4px, 90px, 0) !important;
          }

          .react-datepicker-wrapper,
          .react-datepicker-wrapper .react-datepicker__input-container,
          .react-datepicker-wrapper .react-datepicker__input-container input {
            width: 100%;
          }

          .react-datepicker-wrapper .react-datepicker__input-container input {
            background: rgb(250, 250, 250);
            color: rgb(11, 11, 11);

            height: 1.3rem;

            padding: .8rem .9rem;
  
            border: none;
            border-radius: 15px; 
          }
        `}</style>
      </div>
    )
  }
}

export default Contact

