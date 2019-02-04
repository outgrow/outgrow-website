import React, { Component } from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { SegmentedControl } from "segmented-control"
import { Stitch, AnonymousCredential } from "mongodb-stitch-browser-sdk"
import {
  Button,
  Head,
  Nav,
  Paragraph,
  ServicePageHeader as Header,
  Title,
  Wire
} from "../components"
import { white, black, blue, lightBlue, red } from "../styles/colors"
import media from "../styles/mediaQueries"
import { reportConversion } from "../utils/googleAds"

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

const ButtonWrapper = styled.div`
  margin: .5rem auto 0 auto;
`

const Locations = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 1.5rem;

  ${media.tablet`margin-left: 28rem;`}
`

const Location = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
`

const LocationTitle = styled.h3`
  
`

const LocationIcon = styled.img`
  width: 5rem;
  margin: .7rem 0;
`

const LocationAddress = styled.p`
  font-size: .8rem;
  font-weight: 100;
`

const Form = styled.form`
  width: 100%;
  
  ${media.tablet`max-width: 50%;`}

  ${media.tablet`margin-left: 28rem;`}
`

const Label = styled.label`
  display: block;
 
  width: 100%;

  color: rgb(${black});
  font-size: 0.9rem;
`

const TextInput = styled.input`
  display: block;
  
  width: 100%;
  height: 1.3rem;

  ${media.veryLargeSmartphone`height: 1.9rem`}

  padding: .8rem .9rem;
  
  border: 1px solid rgb(${blue});
  border-radius: 15px;

  font-family: Axiforma, Helvetica, "sans-serif";

  background: rgb(${white});
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

const Textarea = styled.textarea`
  width: 100%;

  border: 1px solid rgb(${blue});
  border-radius: 15px;

  font-family: Axiforma, "sans-serif";

  padding: 0.7rem 1rem;

  background: rgb(${white});
`

const Error = styled.p`
  color: rgb(${red});
  font-size: .9rem;
  margin-top: 1rem;
`

const defaultState = {
  emailAddress: "",
  category: "",
  phoneNumber: "",
  message: "",
  callbackPreferred: false,
  preferredTimeForCallback: new Date(),
  error: false
}

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      ...defaultState,
      sent: false
    }
  }

  componentDidMount() {
    try {
      const client = Stitch.defaultAppClient;

      // Stitch client is already initiated if this didn't crash
    } catch(err) {
      // Threw error because client is not initiated
      const stitchClient = Stitch.initializeDefaultAppClient("outgrow-hunql")
      stitchClient.auth.loginWithCredential(new AnonymousCredential())
    }
  }

  handleCallbackPreferredToggle = (callbackPreferred) => this.setState({ callbackPreferred })

  handleCategoryChange = (category) => this.setState({ category })

  handleFieldChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handlePreferredTimeChange = (preferredTimeForCallback) => this.setState({ preferredTimeForCallback })

  handleSubmit = (event) => {
    event.preventDefault()

    Stitch.defaultAppClient.callFunction("sendContactRequest", [this.state])
      .then((result) => {
        if (typeof result !== "undefined" && typeof result.MessageId === "string") {
          reportConversion()

          this.setState({
            ...defaultState,
            sent: result
          })
        } else if (typeof result !== "undefined" && result.error === true && typeof result.message === "string") {
          this.setState({
            error: true,
            errorMessage: result.message
          })
        } else {
          this.setState({
            error: true
          })
        }
      })
      .catch((err) => {
        this.setState({
          error: true
        })
      })
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <Head title="E-Commerce Consultancy | Get a Quote — Contact Our Team Now | out:grow" />
        <Nav />
        
        <Header
          backgroundImage="/static/contact.jpg"
          body={[
            "Submit the form below and an out:grow representative will get back to you at your preferred time. Alternatively, set up a face-to-face meeting at one of our locations around the world.",
            "For emergencies, do not wait and call our 24/7 hotline at +1 (281) OUT-GROW."
          ]}
          buttonText="Reach out"
          buttonTextColor={blue}
          overlayColor={lightBlue}
          title="Get in touch."
        />

        <Wire color={blue} />

        <PageWrapper id="section-content">
          <Title color={blue}>Our locations.</Title>

          <Paragraph>As a global company helping global clients, we at out:grow provide 24/7 services to retailers and agencies around the world thanks to our offices in Los Angeles and Dubai.</Paragraph>

          <Locations>
            <Location style={{ marginRight: ".5rem" }}>
              <LocationTitle>Los Angeles</LocationTitle>
              <LocationIcon alt="Los Angeles, California" src="/static/california.png" />
              <LocationAddress>
                601 S. Figueroa Street<br/>
                Suite 4050<br/>
                Los Angeles, CA 90071<br/>
                United States of America
              </LocationAddress>
            </Location>
           
            <Location style={{ marginLeft: ".5rem" }}>
              <LocationTitle>Dubai</LocationTitle>
              <LocationIcon alt="Dubai, United Arab Emirates" src="/static/uae.png" />
              <LocationAddress>
                3rd Floor, The Offices 3<br/>
                One Central, World Trade Center<br/>
                P.O. Box 9573<br/>
                Dubai<br/>
                United Arab Emirates
              </LocationAddress>
            </Location>
          </Locations>

          <Title color={blue}>Let us help.</Title>
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
                  required
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
                  required
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
                    color: `rgb(${blue})`,
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
                  color: `rgb(${blue})`,
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
              <Button
                backgroundColor={blue}
                color={white}
                type="submit"
                disabled={this.state.sent || this.state.error}
              >
                {this.state.sent ? "Thank you!" : "Send"}
              </Button>
            </ButtonWrapper>

            {this.state.error && <Error>{this.state.errorMessage || "We're sorry, something wrong happened. Please send your inquiry manually to contact@outgrow.io while our engineers are fixing this."}</Error>}
            
            {/* LinkedIn conversion tracking pixel rendered on sent */}
            {this.state.sent && <img height={1} width={1} style={{ display: "none"}} alt="" src="https://dc.ads.linkedin.com/collect/?pid=672676&conversionId=669228&fmt=gif" />}
          </Form>
        </PageWrapper>
      </div>
    )
  }
}

export default Contact

