import React, { Component } from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { SegmentedControl } from "segmented-control"
import { Button, Head, Nav, ServicePageHeader as Header } from "../components"
import { white, black, blue, lightBlue } from "../styles/colors"
import media from "../styles/mediaQueries"

let DatePicker = () => null;

// Only import react-datepicker if running on client
if (typeof window !== "undefined") {
  DatePicker = dynamic(import("react-datepicker"))

  dynamic(import("react-datepicker/dist/react-datepicker.css"))
  dynamic(import("../styles/datePicker.css"))
  dynamic(import("../styles/segmentedControl.css"))
}

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`padding: 3rem;`}
`

const Title = styled.h2`
  color: rgb(${white});
  font-size: 2.4rem;
  ${media.smallTablet`font-size: 3rem;`}
  font-weight: 800;
  letter-spacing: -2px;
  margin-top: 1.3rem;
`

const Paragraph = styled.p`
  color: rgb(${white});
  margin-bottom: 1.4rem;
`

const Overlay = styled.section`
  min-height: 100vh;
  height: 100%;
  width: 100%;

  padding: 3rem 1.2rem 2rem 1.2rem;
  ${media.smallTablet`padding: 3rem 3rem 2rem 3rem;`}
  
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  ${media.tablet`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `}
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
  
  ${media.tablet`max-width: 60%;`}
`

const Label = styled.label`
  display: block;
 
  width: 100%;

  color: rgb(${white});
  font-size: 0.9rem;
`

const TextInput = styled.input`
  display: block;
  
  width: 100%;
  height: 1.3rem;

  ${media.veryLargeSmartphone`height: 1.9rem`}

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
  background: rgb(${white});
  color: rgb(${black});

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
        
        <Header
          backgroundImage="/static/contact.jpg"
          body={["Submit this form and an out:grow representative will get back to you at your preferred time. For emergencies, immediately call our 24/7 hotline at (800) 918-0818."]}
          buttonTextColor={blue}
          overlayColor={lightBlue}
          title="Get in touch."
        />
        <PageWrapper id="section-content">
          <Form onSubmit={this.handleSubmit}>
            <DividedFieldWrapper>
              <FieldWrapper marginRight>
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
                    color: `rgb(${white})`,
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
                  color: `rgb(${white})`,
                  fontSize: ".8rem",
                  transitionDuration: "300ms"
                }}
              />
            </FieldWrapper>

            <FieldWrapper style={{ marginTop: ".8rem" }}>
              <Textarea
                id="message"
                name="message"
                onChange={this.handleFieldChange}
                value={this.state.message}
                rows={4}
                placeholder="Message"
              />
            </FieldWrapper>

            <ButtonWrapper>
              <Button color={blue} href="#">Send</Button>
            </ButtonWrapper>
          </Form>
        </PageWrapper>
      </div>
    )
  }
}

export default Contact

