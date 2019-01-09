import React, { Component } from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { SegmentedControl } from "segmented-control"
import Head from "../components/head"
import Header from "../components/servicePageHeader"
import Nav from "../components/nav"
import Button from "../components/button"
import "react-datepicker/dist/react-datepicker.css"
import "../styles/datePicker.css"
import "../styles/segmentedControl.css"

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
  margin-top: 1.3rem;
`

const Paragraph = styled.p`
  color: rgb(250, 250, 250);
  margin-bottom: 1.4rem;
`

const Overlay = styled.section`
  min-height: 100vh;
  height: 100%;
  width: 100%;

  padding: 3rem 1.2rem 2rem 1.2rem;
  
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const SectionWithBackgroundImage = styled.div`
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
 
  width: 100%;

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

  font-family: Axiforma, Helvetica, "sans-serif";
`

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

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

  height: 1.8rem;

  padding: .4rem .9rem;
  
  border: none;
  border-radius: 15px;
`

const CheckboxInput = styled.input`
  background: white;
`

const Textarea = styled.textarea`
  width: 100%;

  border: none;
  border-radius: 15px;

  font-family: Axiforma, "sans-serif";

  padding: 0.7rem 1rem;
`

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      emailAddress: "",
      category: "",
      phoneNumber: "",
      message: "",
      callbackPreferred: false,
      preferredTimeForCallback: new Date()
    }
  }

  handleCallbackPreferredToggle = (callbackPreferred) => this.setState({ callbackPreferred })

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
            
            <Paragraph>Submit this form and an out:grow representative will get back to you at your preferred time. For emergencies, immediately call our 24/7 hotline at (800) 918-0818.</Paragraph>
            
            <Form onSubmit={this.handleSubmit}>
              <DividedFieldWrapper>
                <FieldWrapper marginRight>
                  {/*<Label htmlFor="emailAddress">E-mail Address</Label>*/}
                  <TextInput
                    id="emailAddress"
                    name="emailAddress"
                    onChange={this.handleFieldChange} 
                    type="email"
                    value={this.state.emailAddress}
                    placeholder="E-mail Address"
                  />
                </FieldWrapper>

                <FieldWrapper marginLeft>
                  {/*<Label htmlFor="phoneNumber">Phone Number</Label>*/}
                  <TextInput
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={this.handleFieldChange}
                    type="tel"
                    value={this.state.phoneNumber}
                    placeholder="Phone Number"
                  />
                </FieldWrapper>
              </DividedFieldWrapper>

              <DividedFieldWrapper>
                <FieldWrapper marginRight>
                  <Label htmlFor="callbackPreferred">Should we call?</Label>
                </FieldWrapper>

                <FieldWrapper className="small-segmented-control-container" marginLeft>
                  <SegmentedControl
                    className="small"
                    name="callbackPreferred"
                    options={[
                      { label: "Yes", value: true, default: true },
                      { label: "No", value: false }
                    ]}
                    setValue={this.handleCallbackPreferredToggle}
                    style={{
                      borderRadius: "25px",
                      color: "rgb(250, 250, 250)",
                      fontSize: ".8rem",
                      height: "1.6rem",
                      transitionDuration: "300ms"
                    }}
                  />
                </FieldWrapper>
              </DividedFieldWrapper>

              {this.state.callbackPreferred &&
                <DividedFieldWrapper>
                  <FieldWrapper marginRight>
                    <Label htmlFor="preferredTimeForCallback">Preferred time</Label>
                  </FieldWrapper>
                  <FieldWrapper marginLeft>
                    <DatePicker
                      id="preferredTimeForCallback"
                      name="preferredTimeForCallback"
                      onChange={this.handlePreferredTimeChange}
                      selected={this.state.preferredTimeForCallback}
                      dateFormat="MM-dd-yyyy HH:mm"
                      showTimeSelect
                    />
                  </FieldWrapper> 
                </DividedFieldWrapper>
              }
        
              <FieldWrapper>
                {/*<Label htmlFor="category">Category</Label>*/}
                <SegmentedControl
                  name="category"
                  options={[
                    { label: "Consulting", value: "consulting", default: true },
                    { label: "Training", value: "training" },
                    { label: "Support", value: "support" }
                  ]}
                  setValue={this.handleCategoryChange}
                  style={{
                    borderRadius: "25px",
                    color: "rgb(250, 250, 250)",
                    fontSize: ".8rem",
                    transitionDuration: "300ms"
                  }}
                />
              </FieldWrapper>

              <FieldWrapper style={{ marginTop: ".8rem" }}>
                {/*<Label htmlFor="message">Message</Label>*/}
                <Textarea
                  id="message"
                  name="message"
                  onChange={this.handleFieldChange}
                  value={this.state.message}
                  rows={4}
                  placeholder="Message"
                />
              </FieldWrapper>
            </Form>
          
            <ButtonWrapper>
              <Button color="1, 111, 185" href="#">Send</Button>
            </ButtonWrapper>
          </Overlay>
        </SectionWithBackgroundImage>
      </div>
    )
  }
}

export default Contact

