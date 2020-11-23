import React, { Component } from "react"
import dynamic from "next/dynamic"
import SegmentedControl from "segmented-control/dist/SegmentedControlWithoutStyles"
import styled from "styled-components"
import VisibilitySensor from "react-visibility-sensor"
import {
  Button,
  ButtonWrapper,
  Footer,
  Head,
  Nav,
  Paragraph,
  ServicePageHeader as Header,
  Title,
  Wire
} from "../components"
import media from "../styles/mediaQueries"
import { green, black, white } from "../styles/colors"
import { reportConversion } from "../utils/googleAds"

let Stitch, AnonymousCredential;

dynamic(import("segmented-control/dist/SegmentedControl.css"))
dynamic(import("../styles/segmentedControl.css"))

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`padding: 3rem;`}
`

const Form = styled.form`
  margin-top: 2rem;
  
  ${media.tablet`margin-left: 28rem;`}
  ${media.laptop`margin-right: 8rem;`}
`

const FieldWrapper = styled.div`
  margin-bottom: .8rem;
  width: 100%;
  padding-right: 1rem;
`

const Slider = styled.input`
  display: block;
  width: 100%;
  margin: 1.5rem 0;
  -webkit-appearance: none;
  
  &::-moz-range-thumb {
    background: rgb(${green});
    box-shadow: none;
    border: none;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -7px; // Needed by Chrome
    background: rgb(${green});
    box-shadow: none;
    border: none;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
  }
  
  &::-moz-range-track {
    background: rgb(${green});
  }
  
  &::-webkit-slider-runnable-track {
    height: 2px;
    background: rgb(${green});
  }
  
  &:focus {
    outline-color: rgb(${green});
  }
`

const Price = styled.span`
  font-size: 1.3rem;
`

const PaymentSwitcher = styled.a`
  display: block;
  margin: 1.5rem 0;
  color: rgb(${props => props.isFloating ? white : black});
  ${media.tablet`color: rgb(${black});`}
`

const HelpPhone = styled.p`
  a {
    color: rgb(${black});
  }
  
  ${props => props.isFloating && `
    font-size: .8rem;
    font-weight: lighter;
    
    a {
      color: rgb(${white});
    }
  `}
  
  ${media.tablet`
    font-size: 1rem;
    font-weight: normal;
    
    a {
      color: rgb(${black});
    }
  `}
`

const SavingsIndicator = styled.p`
  display: block;
  margin-top: .5rem;
`

const PriceBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: ${props => props.isSticky ? `sticky` : `relative`};
  bottom: 0;
  z-index: 99;
  
  ${media.tablet`flex-direction: row;`}
  
  ${props => props.isFloating && `
    background: rgb(${green});
    color: rgb(${white});
    width: 100vw;
    transform: translateX(-1.2rem);    
    padding: 1.2rem;
  `}
  
  ${media.smallTablet`
    ${props => props.isFloating && `
      transform: translateX(-3rem);
      padding: 1.5rem 3rem;
    `}
  `}

  ${media.tablet`
    position: relative;
    
    ${props => props.isFloating && `
      background: transparent;
      color: rgb(${black});
      width: auto;
      transform: translateX(0);
      padding: 0;
    `}
  `}
`

const TextInput = styled.input`
  display: block;
  width: 100%;
  margin: 1rem 0;
  height: 2.5rem;
  padding-left: .5rem;
  font-size: 1rem;
`

const SideBySide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.tablet`flex-direction: row;`}
`

const Back = styled(PaymentSwitcher)`
  ${props => props.marginLeft && `margin-left: 1rem;`}
`

const SubLabel = styled.p`
  font-weight: lighter;
  font-size: 1rem;
`

class SupportPlans extends Component {
  constructor() {
    super()

    this.customerDetailForm = React.createRef();

    this.state = {
      chatSupport: false,
      responseTime: 0,
      hours: 0,
      advanceNotice: 72,
      timeZone: "dubai",
      dedicatedExperts: false,
      showPriceMonthly: true,
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      yearlySavings: "$0",
      step: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      zip: "",
      state: "",
      country: ""
    }
  }

  componentDidMount() {
    import("mongodb-stitch-browser-sdk").then((mod) => {
      Stitch = mod.Stitch;
      AnonymousCredential = mod.AnonymousCredential;

      try {
        const client = Stitch.defaultAppClient;

        // Stitch client is already initiated if this didn't crash
      } catch(err) {
        // Threw error because client is not initiated
        const stitchClient = Stitch.initializeDefaultAppClient("outgrow-hunql")
        stitchClient.auth.loginWithCredential(new AnonymousCredential())
      }
    });
  }

  handleUpdatePrice = () => {
    let price = 0

    const { chatSupport, dedicatedExperts, timeZone } = this.state
    const hours = parseInt(this.state.hours)
    const advanceNotice = parseInt(this.state.advanceNotice)
    const responseTime = parseInt(this.state.responseTime)

    if (chatSupport) {
      price += 5990
    }

    if (hours) {
      let faceTimeTotal = 1000 * hours

      if (hours > 10 && hours <= 15) {
        faceTimeTotal = faceTimeTotal * 0.95
      }

      if (hours > 15) {
        faceTimeTotal = faceTimeTotal * 0.9
      }

      price += faceTimeTotal

      if (advanceNotice === 24) {
        price += 3000
      }

      if (advanceNotice === 5) {
        price += 6000
      }

      if (advanceNotice === 1) {
        price += 10000
      }
    }

    if (chatSupport) {
      if (responseTime === 30) {
        price += 10000
      }

      if (responseTime === 60) {
        price += 8000
      }

      if (responseTime === 120) {
        price += 6000
      }

      if (responseTime === 180) {
        price += 4000
      }
    }

    if (dedicatedExperts && hours && hours > 0) {
      price = price * 1.35
    } else if (dedicatedExperts) {
      price = price * 1.2
    }

    if (timeZone === "247") {
      price = price * 2.35
    }

    const currency = { style: "currency", currency: "USD", minimumFractionDigits: 0 };

    this.setState({
      monthlyPrice: parseInt(price / 12).toLocaleString("en-US", currency),
      yearlyPrice: parseInt(price * 0.9).toLocaleString("en-US", currency),
      yearlySavings: parseInt(price * 0.1).toLocaleString("en-US", currency)
    })
  }

  handleSegmentedControlChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value
    }, this.handleUpdatePrice)
  }

  handleInputChange = (event) => {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value
    }, this.handleUpdatePrice)
  }

  handleSwitchPricing = (event) => {
    event.preventDefault()

    this.setState({
      showPriceMonthly: !this.state.showPriceMonthly
    })
  }

  handleNextStep = () => {
    if (this.state.step === 0) {
      this.setState({
        step: 1
      })
    }
  }

  handlePreviousStep = (event) => {
    event.preventDefault()

    if (this.state.step === 1) {
      this.setState({
        step: 0
      })
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    Stitch.defaultAppClient.callFunction("requestSupportPlan", [this.state])
      .then((result) => {
        if (typeof result !== "undefined" && typeof result.MessageId === "string") {
          reportConversion()

          this.setState({
            step: 2
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

  togglePriceBreakdownSticky = (shouldBeSticky) => {
    if (!this.state.isPriceBreakdownSticky && shouldBeSticky) {
      this.setState({
        isPriceBreakdownSticky: shouldBeSticky
      })
    }
  }

  togglePriceBreakdownFloating = (isNotFloating) => {
    this.setState({
      isPriceBreakdownFloating: !isNotFloating,
      isPriceBreakdownSticky: isNotFloating
    })
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <Head title="Reaction Commerce Support Plans | Official Partner | Chat & Live Developer Help | out:grow" />
        <Nav />

        <Header
          backgroundImage="/emergency.jpg"
          body={[
            "Your new Reaction Commerce project is looking sharper than ever. But is your team ready to react in case an emergency happens? At out:grow, we've got the support plan you need for any situation.",
            "With a support plan, our team is at your service 24/7 for your needs. Whether you prefer chat, screen-sharing calls or need a guaranteed response time — we have a solution to answer your needs."
          ]}
          buttonTextColor={green}
          overlayColor={green}
          title="We've got your back."
        />

        <Wire color={green} />

        <PageWrapper id="section-content">
          <Title color={green}>Our Reaction Commerce support plans.</Title>

          <Paragraph>Because every project is different, there is no one-size-fits-all in the world of support. Our Reaction Commerce experts are available to your team — whether you need a full-featured dedicated plan with a guaranteed response time, or a lightweight chat-only membership for non-urgent use.</Paragraph>

          <Paragraph>With our support plan configurator, we're leading the way by giving our customers full power. Estimate your base pricing, choose your payment terms and sign up right from our website. Getting peace of mind for your Reaction Commerce infrastructure has never been that easy.</Paragraph>

          {this.state.step === 0 &&
            <Form>
              <Title color={green} noMarginLeft>Let's figure out your needs.</Title>

              <FieldWrapper>
                <label htmlFor="chat-support">Unlimited chat support</label>
                <SubLabel>Our experts will be reachable on your company's Slack or any other chat solution, as well as by e-mail.</SubLabel>
                <SegmentedControl
                  name="chat-support"
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false, default: true }
                  ]}
                  setValue={(value) => this.handleSegmentedControlChange("chatSupport", value)}
                  style={{ color: `rgb(${green}` }}
                />
              </FieldWrapper>

              <FieldWrapper>
                <label htmlFor="response-time">Guaranteed chat response time</label>
                <SubLabel>We'll be legally bound to respect this response time within your chosen working hours (see below).</SubLabel>
                <VisibilitySensor onChange={this.togglePriceBreakdownSticky}>
                  <SegmentedControl
                    name="response-time"
                    options={[
                      { label: "30 min.", value: 30, disabled: !this.state.chatSupport },
                      { label: "1 hour", value: 60, disabled: !this.state.chatSupport },
                      { label: "2 hours", value: 120, disabled: !this.state.chatSupport },
                      { label: "3 hours", value: 180, disabled: !this.state.chatSupport },
                      { label: "None", value: 0, default: true }
                    ]}
                    setValue={(value) => this.handleSegmentedControlChange("responseTime", value)}
                    style={{ color: `rgb(${green}` }}
                  />
                </VisibilitySensor>
              </FieldWrapper>

              <FieldWrapper>
                <label htmlFor="hours">Yearly face-time hours: {this.state.hours}</label>
                <SubLabel>Your team can use these hours throughout the year for problem-solving calls using screen-sharing.</SubLabel>
                <Slider type="range" id="hours" min="0" max="20" step="1" name="hours" onChange={this.handleInputChange} value={this.state.hours}/>
              </FieldWrapper>

              <FieldWrapper>
                <label htmlFor="advance-notice">Minimum advance notice to book a face-time session</label>
                <SubLabel>Your team will have to respect this minimum delay when booking their face-time sessions.</SubLabel>
                <SegmentedControl
                  name="advance-notice"
                  options={[
                    { label: "1 hour", value: 1 },
                    { label: "5 hours", value: 5 },
                    { label: "24 hours", value: 24 },
                    { label: "72 hours", value: 72, default: true }
                  ]}
                  setValue={(value) => this.handleSegmentedControlChange("advanceNotice", value)}
                  style={{ color: `rgb(${green}` }}
                />
              </FieldWrapper>

              <FieldWrapper>
                <label htmlFor="dedicated-experts">Dedicated experts</label>
                <SubLabel>We'll make sure that your developers always deal with the same people at out:grow.</SubLabel>
                <SegmentedControl
                  name="dedicated-experts"
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false, default: true }
                  ]}
                  setValue={(value) => this.handleSegmentedControlChange("dedicatedExperts", value)}
                  style={{ color: `rgb(${green}` }}
                />
              </FieldWrapper>

              <FieldWrapper>
                <label htmlFor="time-zone">Operating time zone</label>
                <SubLabel>Our experts will be reachable by your team during these working hours.</SubLabel>
                <SegmentedControl
                  name="time-zone"
                  options={[
                    { label: 'Los Angeles\u000D\u000AMon-Fri 9AM-5PM PST', value: "losangeles" },
                    { label: "Dubai\u000D\u000ASun-Thu 9AM-5PM GMT+4", value: "dubai", default: true },
                    { label: "24/7\u000D\u000AIncluding bank holidays", value: "247" }
                  ]}
                  setValue={(value) => this.handleSegmentedControlChange("timeZone", value)}
                  style={{ color: `rgb(${green}` }}
                />
              </FieldWrapper>

              <PriceBreakdown
                isFloating={this.state.isPriceBreakdownFloating}
                isSticky={this.state.isPriceBreakdownSticky}
                ref={this.priceBreakdown}
              >
                <div>
                  <p>Your total is <Price>{
                    this.state.showPriceMonthly ?
                      <span>{this.state.monthlyPrice} per month</span> :
                      <span>{this.state.yearlyPrice} per year</span>
                  }</Price>
                  </p>

                  {!this.state.showPriceMonthly &&
                    <SavingsIndicator>You are saving {this.state.yearlySavings} by paying yearly.</SavingsIndicator>
                  }

                  <PaymentSwitcher
                    href="#"
                    onClick={this.handleSwitchPricing}
                    isFloating={this.state.isPriceBreakdownFloating}
                  >
                    Pay {this.state.showPriceMonthly ? "yearly and get 10% off" : "monthly for more flexibility"}
                  </PaymentSwitcher>
                </div>
                <div>
                  <HelpPhone
                    isFloating={this.state.isPriceBreakdownFloating}
                  >
                    Need help? Call our 24/7 sales team at <a href="tel:+12816884769">+1 (281) OUT-GROW</a>.
                  </HelpPhone>
                </div>
              </PriceBreakdown>

              <VisibilitySensor onChange={this.togglePriceBreakdownFloating}>
                <ButtonWrapper keepLeft>
                  <Button backgroundColor={green} color={white} onClick={this.handleNextStep}>Sign Up Online</Button>
                </ButtonWrapper>
              </VisibilitySensor>
            </Form>
          }

          {this.state.step === 1 &&
            <Form ref={this.customerDetailForm} onSubmit={this.handleFormSubmit}>
              <Title color={green} noMarginLeft>Nice to meet you!</Title>

              <Paragraph marginBottom noMarginLeft noMarginRight>Before going further, we need to know a little bit more about you and the company you work with. We'll reach out as soon as we can to activate your plan.</Paragraph>

              <SideBySide>
                <FieldWrapper>
                  <label htmlFor="first-name">First Name</label>
                  <TextInput type="text" id="first-name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} required />
                </FieldWrapper>

                <FieldWrapper>
                  <label htmlFor="last-name">Last Name</label>
                  <TextInput type="text" id="last-name" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} required />
                </FieldWrapper>
              </SideBySide>

              <SideBySide>
                <FieldWrapper>
                  <label htmlFor="email">E-Mail Address</label>
                  <TextInput type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
                </FieldWrapper>

                <FieldWrapper>
                  <label htmlFor="phone">Phone Number</label>
                  <TextInput type="tel" id="phone" name="phone" value={this.state.phone} onChange={this.handleInputChange} required />
                </FieldWrapper>
              </SideBySide>

              <FieldWrapper>
                <label htmlFor="company">Company Name</label>
                <TextInput type="text" id="company" name="company" value={this.state.company} onChange={this.handleInputChange} required />
              </FieldWrapper>

              <FieldWrapper>
                <label htmlFor="address">Headquarters Address</label>
                <TextInput type="text" id="address" name="address" value={this.state.address} onChange={this.handleInputChange} required />
              </FieldWrapper>

              <SideBySide>
                <FieldWrapper>
                  <label htmlFor="city">City</label>
                  <TextInput type="text" id="city" name="city" value={this.state.city} onChange={this.handleInputChange} required />
                </FieldWrapper>

                <FieldWrapper>
                  <label htmlFor="zip">ZIP Code (if applicable)</label>
                  <TextInput type="text" id="zip" name="zip" value={this.state.zip} onChange={this.handleInputChange} />
                </FieldWrapper>
              </SideBySide>

              <SideBySide>
                <FieldWrapper>
                  <label htmlFor="state">State/Province (if applicable)</label>
                  <TextInput type="text" id="state" name="state" value={this.state.state} onChange={this.handleInputChange} />
                </FieldWrapper>

                <FieldWrapper>
                  <label htmlFor="country">Country</label>
                  <TextInput type="text" id="country" name="country" value={this.state.country} onChange={this.handleInputChange} required />
                </FieldWrapper>
              </SideBySide>

              <ButtonWrapper keepLeft>
                <Button backgroundColor={green} color={white} type="submit">Sign Up Online</Button>
                <Back href="#" onClick={this.handlePreviousStep} marginLeft>or go back to the configurator</Back>
              </ButtonWrapper>
            </Form>
          }

          {this.state.step === 2 &&
            <Form>
              <Title color={green} noMarginLeft>Thank you!</Title>

              <Paragraph noMarginLeft>Our team will be in touch soon to activate your support plan.</Paragraph>
              <Back href="#" onClick={this.handlePreviousStep}>Go back to the configurator.</Back>
            </Form>
          }
        </PageWrapper>

        <Footer color={green} />
      </div>
    )
  }
}

export default SupportPlans

