
import { applicationServiceClient } from './application-service-client';
import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';

pactWith({ consumer: 'ApplicationServiceConsumer', provider: 'ApplicationServiceProvider' }, provider => {
  let client;

  beforeEach(() => {
    client = applicationServiceClient(provider.mockService.baseUrl)
  });

  describe('get rate estimate ui definition', () => {
    beforeEach(() => 
      provider.addInteraction({
        state: "Given a BorrowerJourney UIDefinition",
        uponReceiving: 'A request to RateEstimate UI Definition',
        willRespondWith: {
          status: 200,
          body: Matchers.like({
            Id: "664fa83d-ac98-411d-8b08-6540ac48733f",
            UiDefinition: {
              component: "rs-ui-container",
              name: "rootContainer",
              ch: [
                {
                  component: "rs-nav",
                  name: "nav"
                },
                {
                  component: "rs-header",
                  name: "header",
                  config: {
                    prefix: "TAKES 1 MINUTE",
                    title: "Get a personalised quote",
                    content: "Calculate how much you could borrow and get your personalised interest rate"
                  },
                  cssClass: "rate-estimate-header"
                },
                {
                  component: "rs-ui-container",
                  name: "bodyContainer",
                  cssClass: "body-container",
                  ch: [
                    {
                      component: "rs-section",
                      name: "main-section",
                      cssClass: "main-section row",
                      ch: [
                        {
                          component: "rs-marketing-rate-estimate",
                          name: "marketing-rate-estimate",
                          ch: [
                            {
                              component: "rs-content-modal",
                              name: "marketing-rate-estimate-modal",
                              cssClass: "wont-affect-your-credit-score",
                              config: {
                                content: "Getting a quote won't affect your credit score. {{toggleModal}}",
                                toggleModalText: "Learn more"
                              },
                              ch: [
                                {
                                  component: "rs-content-heading",
                                  name: "marketing-modal-title",
                                  config: {
                                    level: 3,
                                    content: "Did you know?"
                                  }
                                },
                                {
                                  component: "rs-content-paragraph",
                                  name: "marketing-modal-description",
                                  config: {
                                    content: "Completing our RateEstimate to find out how much you can borrow won’t affect your credit score."
                                  }
                                },
                                {
                                  component: "rs-ui-container",
                                  name: "marketing-modal-bottom",
                                  cssClass: "marketing-modal-bottom",
                                  ch: [
                                    {
                                      component: "rs-content-heading",
                                      name: "marketing-modal-bottom-subtitle",
                                      config: {
                                        level: 5,
                                        content: "What actually happens?"
                                      }
                                    },
                                    {
                                      component: "rs-content-paragraph",
                                      name: "marketing-modal-bottom-description",
                                      config: {
                                        content: "When you request a RateEstimate, Plenti Pty Limited will request your credit file as an ‘access seeker’ from Equifax and/or Illion. This request will only be visible to you and other access seekers, will not be visible to credit providers, and will not affect your Equifax or Illion credit score."
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          component: "rs-ui-container",
                          name: "rateEstimateFormContainer",
                          cssClass: "form-container col-xs-12",
                          ch: [
                            {
                              component: "rs-form",
                              name: "rateEstimateForm",
                              validators: [
                                {
                                  validator: "dateOfBirth",
                                  target: "applicant.dateOfBirth.isoString"
                                }
                              ],
                              ch: [
                                {
                                  component: "rs-section",
                                  name: "loan",
                                  appModelPath: "loan",
                                  ch: [
                                    {
                                      component: "rs-ui-container",
                                      name: "loanAmountContainer",
                                      initState: {
                                        hidden: false
                                      },
                                      cssClass: "form-container col-xs-12",
                                      ch: [
                                        {
                                          component: "rs-form-subtitle",
                                          name: "loanInfoSubtitle",
                                          index: 1,
                                          content: "How much would you like to borrow?",
                                          cssClass: "page-subtitle"
                                        },
                                        {
                                          component: "rs-form-currency-input",
                                          name: "amount",
                                          appModelPath: "loan.amount",
                                          cssClass: "prominent",
                                          config: {
                                            placeholder: "Amount between $5,000 and $45,000",
                                            minimumAmount: 5000,
                                            maximumAmount: 45000
                                          },
                                          attrs: {
                                            autoFocus: true
                                          },
                                          errorMessage: "Enter your loan amount"
                                        }
                                      ]
                                    },
                                    {
                                      component: "rs-form-select",
                                      name: "purpose",
                                      appModelPath: "loan.purpose",
                                      service: "loanInfoService",
                                      controlTarget: {
                                        type: "hide",
                                        targets: {
                                          purposeReason: "loan.purposeReason",
                                          useOfFund: "loan.useOfFund",
                                          autoDirectLink: "loan.autoDirectLink"
                                        }
                                      },
                                      config: {
                                        placeholder: "Loan purpose",
                                        title: "Loan Purpose",
                                        name: "purpose",
                                        options: [
                                          {
                                            key: "DebtConsolidation",
                                            value: "Debt Consolidation",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "Car",
                                            value: "Car",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "HomeImprovement",
                                            value: "Home Improvement",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "Holiday",
                                            value: "Holiday",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "Wedding",
                                            value: "Wedding",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "Repairs",
                                            value: "Repairs",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "MovingCosts",
                                            value: "Moving Costs",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "RentalBond",
                                            value: "Rental Bond",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "PayBills",
                                            value: "Pay Bills",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "SolarBattery",
                                            value: "Solar / Battery",
                                            showTarget: [
                                              "greenLoanLink"
                                            ]
                                          },
                                          {
                                            key: "MedicalDental",
                                            value: "Medical",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "ProfessionalServiceFees",
                                            value: "Legal / Professional Services",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer",
                                              "legalFinanceReferralMessage"
                                            ]
                                          },
                                          {
                                            key: "Boat",
                                            value: "Boat",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "Motorbike",
                                            value: "Motorbike",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "FuneralExpenses",
                                            value: "Funeral Expenses",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "Business",
                                            value: "Business",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "Investment",
                                            value: "Investment",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "PersonalIncomeTax",
                                            value: "Personal Income Tax",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer"
                                            ]
                                          },
                                          {
                                            key: "Other",
                                            value: "Other",
                                            showTarget: [
                                              "sectionContainer",
                                              "loanAmountContainer",
                                              "loan.purposeReason"
                                            ]
                                          }
                                        ]
                                      },
                                      predicate: {
                                        op: "in",
                                        path: "loan.purpose",
                                        value: [
                                          "DebtConsolidation",
                                          "Car",
                                          "Motorbike",
                                          "HomeImprovement",
                                          "Holiday",
                                          "Wedding",
                                          "Repairs",
                                          "MovingCosts",
                                          "RentalBond",
                                          "PayBills",
                                          "ProfessionalServiceFees",
                                          "Business",
                                          "Investment",
                                          "FuneralExpenses",
                                          "SolarBattery",
                                          "MedicalDental",
                                          "Boat",
                                          "Other",
                                          "PersonalIncomeTax"
                                        ]
                                      },
                                      errorMessage: "Loan purpose is required"
                                    },
                                    {
                                      component: "rs-message-referral",
                                      name: "autoDirectLink",
                                      appModelPath: "loan.autoDirectLink",
                                      config: {
                                        name: "autoDirectReferMessage",
                                        type: "info",
                                        referralType: "autoDirect"
                                      },
                                      initState: {
                                        hidden: true
                                      }
                                    },
                                    {
                                      component: "rs-message-referral",
                                      name: "greenLoanLink",
                                      config: {
                                        type: "info",
                                        referralType: "greenLoan"
                                      },
                                      initState: {
                                        hidden: true
                                      }
                                    },
                                    {
                                      component: "rs-message-referral",
                                      name: "legalFinanceReferralMessage",
                                      config: {
                                        type: "info",
                                        referralType: "legalFinance"
                                      },
                                      initState: {
                                        hidden: true
                                      }
                                    },
                                    {
                                      component: "rs-form-input",
                                      name: "purposeReason",
                                      appModelPath: "loan.purposeReason",
                                      attrs: {
                                        placeholder: "What is the purpose?",
                                        type: "text"
                                      },
                                      initState: {
                                        hidden: true
                                      },
                                      predicate: {
                                        op: "matches",
                                        path: "loan.purposeReason",
                                        value: "^.{1,40}$"
                                      },
                                      errorMessage: "A description is required of up to 40 characters"
                                    },
                                    {
                                      component: "rs-form-input",
                                      name: "loan.useOfFund",
                                      appModelPath: "loan.useOfFund",
                                      attrs: {
                                        placeholder: "Describe the use of funds",
                                        type: "text"
                                      },
                                      initState: {
                                        hidden: true
                                      },
                                      predicate: {
                                        op: "matches",
                                        path: "loan.useOfFund",
                                        value: "^.{1,40}$"
                                      },
                                      errorMessage: "A description is required of up to 40 charaters"
                                    }
                                  ]
                                },
                                {
                                  component: "rs-ui-container",
                                  name: "sectionContainer",
                                  initState: {
                                    hidden: false
                                  },
                                  cssClass: "form-container col-xs-12",
                                  ch: [
                                    {
                                      component: "rs-section",
                                      name: "personalDetails",
                                      cssClass: "row",
                                      ch: [
                                        {
                                          component: "rs-form-subtitle",
                                          name: "personalDetailsSubtitle",
                                          index: 2,
                                          content: "Your details",
                                          cssClass: "page-subtitle"
                                        },
                                        {
                                          component: "rs-section",
                                          name: "applicant.name",
                                          cssClass: "row",
                                          ch: [
                                            {
                                              component: "rs-message",
                                              name: "heading",
                                              cssClass: "col-xs-12",
                                              config: {
                                                name: "nameMatchMessage",
                                                content: "<span class=\"important\">Important:</span> Enter your name and date of birth as it appears on your driver licence or passport as this will help us identify you.",
                                                type: "info"
                                              }
                                            },
                                            {
                                              component: "rs-form-input",
                                              name: "firstName",
                                              appModelPath: "applicant.firstName",
                                              attrs: {
                                                placeholder: "First name",
                                                type: "text",
                                                name: "firstName"
                                              },
                                              cssClass: "col-xs-12 col-sm-4 col-sm-gutter-right",
                                              errorMessage: "Invalid first name",
                                              predicate: {
                                                op: "matches",
                                                path: "applicant.firstName",
                                                value: "^[a-zA-Z]([ ]?[a-zA-Z\\-']){0,39}$"
                                              },
                                              icons: {
                                                left: "far fa-user"
                                              }
                                            },
                                            {
                                              component: "rs-form-input",
                                              name: "middleName",
                                              appModelPath: "applicant.middleName",
                                              attrs: {
                                                placeholder: "Middle name",
                                                type: "text",
                                                name: "middleName"
                                              },
                                              cssClass: "col-xs-12 col-sm-4 col-sm-gutter-right",
                                              errorMessage: "Invalid middle name",
                                              predicate: {
                                                op: "matches",
                                                path: "applicant.middleName",
                                                value: "^$|^[a-zA-Z]([ ]?[a-zA-Z\\-']){1,}$"
                                              },
                                              initState: {
                                                required: false
                                              },
                                              icons: {
                                                left: "far fa-user"
                                              }
                                            },
                                            {
                                              component: "rs-form-input",
                                              name: "lastName",
                                              appModelPath: "applicant.lastName",
                                              attrs: {
                                                placeholder: "Last name",
                                                type: "text",
                                                name: "lastName"
                                              },
                                              cssClass: "col-xs-12 col-sm-4",
                                              errorMessage: "Invalid last name",
                                              predicate: {
                                                op: "matches",
                                                path: "applicant.lastName",
                                                value: "^[a-zA-Z]([ ]?[a-zA-Z\\-']){0,49}$"
                                              },
                                              icons: {
                                                left: "far fa-user"
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          component: "rs-form-input",
                                          name: "email",
                                          cssClass: "col-xs-12",
                                          appModelPath: "contact.email",
                                          attrs: {
                                            placeholder: "Email address",
                                            type: "text",
                                            name: "email"
                                          },
                                          errorMessage: "Email address is required",
                                          predicate: {
                                            op: "matches",
                                            path: "contact.email",
                                            value: "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+(?!con)[a-zA-Z](?:[a-zA-Z-]*[a-zA-Z])$"
                                          },
                                          icons: {
                                            left: "far fa-envelope"
                                          }
                                        },
                                        {
                                          component: "rs-form-input",
                                          name: "mobile",
                                          cssClass: "col-xs-12",
                                          appModelPath: "contact.mobileNumber",
                                          attrs: {
                                            placeholder: "Mobile number",
                                            type: "tel",
                                            name: "mobileNumber",
                                            autoComplete: false
                                          },
                                          errorMessage: "Invalid mobile number (e.g. 0400123456)",
                                          predicate: {
                                            op: "matches",
                                            path: "contact.mobileNumber",
                                            value: "^04\\d{8}$"
                                          },
                                          icons: {
                                            left: "fas fa-mobile-alt"
                                          }
                                        },
                                        {
                                          component: "rs-form-input",
                                          name: "dateOfBirthInputString",
                                          cssClass: "col-xs-12",
                                          appModelPath: "applicant.dateOfBirth.isoString",
                                          attrs: {
                                            placeholder: "Date of birth (DD/MM/YYYY)",
                                            type: "tel",
                                            name: "dateOfBirth",
                                            maxLength: 10
                                          },
                                          mask: "dob",
                                          errorMessage: "Invalid date of birth (DD/MM/YYYY)",
                                          predicate: {
                                            op: "matches",
                                            path: "applicant.dateOfBirth.isoString",
                                            value: "^(\\d\\d\\d\\d)(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?$"
                                          },
                                          icons: {
                                            left: "far fa-calendar"
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      component: "rs-section",
                                      name: "individualAddressSection",
                                      ch: [
                                        {
                                          component: "rs-ui-container",
                                          name: "residentialAddressContainer",
                                          appModelPath: "address.residentialAddress.residentialAddressContainer",
                                          service: "addressService",
                                          ch: [
                                            {
                                              component: "rs-form-subtitle",
                                              name: "addressDetailsSubtitle",
                                              index: 3,
                                              content: "Your home address",
                                              cssClass: "page-subtitle"
                                            },
                                            {
                                              component: "rs-form-hint",
                                              name: "addressDetailsSubtitleDescription",
                                              content: "Start typing your address below. If your address does not appear, enter it manually.",
                                              cssClass: "page-text"
                                            },
                                            {
                                              component: "rs-section",
                                              name: "harmonyAddressWrapper",
                                              appModelPath: "address.residentialAddress.harmonyAddressWrapper",
                                              initState: {
                                                hidden: false
                                              },
                                              ch: [
                                                {
                                                  component: "rs-form-address-input",
                                                  name: "residentialAddress",
                                                  appModelPath: "address.residentialAddress.fullAddress",
                                                  cssClass: "prominent",
                                                  attrs: {
                                                    placeholder: "Start typing your home address"
                                                  },
                                                  errorMessage: "Residential address is required"
                                                },
                                                {
                                                  component: "rs-form-link",
                                                  name: "manualAddressLink",
                                                  content: "Enter address manually +",
                                                  cssClass: "address-link"
                                                }
                                              ]
                                            },
                                            {
                                              component: "rs-section",
                                              name: "manualAddressWrapper",
                                              appModelPath: "address.residentialAddress.manualAddressWrapper",
                                              initState: {
                                                hidden: true
                                              },
                                              ch: [
                                                {
                                                  component: "rs-section",
                                                  name: "address",
                                                  appModelPath: "address.residentialAddress.sectionWrapper",
                                                  ch: [
                                                    {
                                                      component: "rs-form-input",
                                                      name: "unitNumber",
                                                      appModelPath: "address.residentialAddress.unitNumber",
                                                      attrs: {
                                                        placeholder: "Unit number",
                                                        type: "text",
                                                        name: "residentialAddress.unitNumber"
                                                      }
                                                    },
                                                    {
                                                      component: "rs-form-input",
                                                      name: "streetNumber",
                                                      appModelPath: "address.residentialAddress.streetNumber",
                                                      attrs: {
                                                        placeholder: "Street number",
                                                        type: "text",
                                                        name: "residentialAddress.streetNumber"
                                                      },
                                                      predicate: {
                                                        op: "matches",
                                                        value: "^.+$",
                                                        path: "address.residentialAddress.streetNumber"
                                                      },
                                                      errorMessage: "Street number is required"
                                                    },
                                                    {
                                                      component: "rs-form-input",
                                                      name: "street",
                                                      appModelPath: "address.residentialAddress.street",
                                                      attrs: {
                                                        placeholder: "Street",
                                                        type: "text",
                                                        name: "residentialAddress.street"
                                                      },
                                                      predicate: {
                                                        op: "matches",
                                                        value: "^[ '&a-zA-Z\\-]{2,30}$",
                                                        path: "address.residentialAddress.street"
                                                      },
                                                      errorMessage: "Street name is required"
                                                    },
                                                    {
                                                      component: "rs-form-input",
                                                      name: "suburb",
                                                      appModelPath: "address.residentialAddress.suburb",
                                                      attrs: {
                                                        placeholder: "Suburb",
                                                        type: "text",
                                                        name: "residentialAddress.suburb"
                                                      },
                                                      predicate: {
                                                        op: "matches",
                                                        value: "^[ '&a-zA-Z\\-]{2,30}$",
                                                        path: "address.residentialAddress.suburb"
                                                      },
                                                      errorMessage: "Suburb name is rqeuired"
                                                    },
                                                    {
                                                      component: "rs-form-input",
                                                      name: "postCode",
                                                      appModelPath: "address.residentialAddress.postCode",
                                                      attrs: {
                                                        placeholder: "Postcode",
                                                        type: "text",
                                                        name: "residentialAddress.postCode"
                                                      },
                                                      predicate: {
                                                        op: "matches",
                                                        value: "^\\d{4}$",
                                                        path: "address.residentialAddress.postCode"
                                                      },
                                                      errorMessage: "Postcode is required"
                                                    },
                                                    {
                                                      component: "rs-form-select",
                                                      name: "state",
                                                      appModelPath: "address.residentialAddress.state",
                                                      config: {
                                                        placeholder: "State",
                                                        name: "residentialAddress.state",
                                                        options: [
                                                          {
                                                            key: "ACT",
                                                            value: "ACT"
                                                          },
                                                          {
                                                            key: "NSW",
                                                            value: "NSW"
                                                          },
                                                          {
                                                            key: "SA",
                                                            value: "SA"
                                                          },
                                                          {
                                                            key: "TAS",
                                                            value: "TAS"
                                                          },
                                                          {
                                                            key: "QLD",
                                                            value: "QLD"
                                                          },
                                                          {
                                                            key: "VIC",
                                                            value: "VIC"
                                                          },
                                                          {
                                                            key: "WA",
                                                            value: "WA"
                                                          },
                                                          {
                                                            key: "NT",
                                                            value: "NT"
                                                          }
                                                        ]
                                                      },
                                                      predicate: {
                                                        op: "in",
                                                        path: "address.residentialAddress.state",
                                                        value: [
                                                          "ACT",
                                                          "NSW",
                                                          "SA",
                                                          "TAS",
                                                          "QLD",
                                                          "VIC",
                                                          "WA",
                                                          "NT"
                                                        ]
                                                      },
                                                      errorMessage: "State is required"
                                                    }
                                                  ]
                                                },
                                                {
                                                  component: "rs-form-link",
                                                  name: "backToHarmonyAddressLink",
                                                  content: "Back to address search",
                                                  cssClass: "address-link"
                                                }
                                              ]
                                            },
                                            {
                                              component: "rs-form-select",
                                              name: "residentialAddressYearsAtAddress",
                                              appModelPath: "address.residentialAddress.yearsAtAddress",
                                              service: "addressService",
                                              config: {
                                                placeholder: "Years at address",
                                                name: "residentialAddress.yearsAtAddress",
                                                options: [
                                                  {
                                                    key: "0",
                                                    value: "Less than 12 months"
                                                  },
                                                  {
                                                    key: "1",
                                                    value: "1 year"
                                                  },
                                                  {
                                                    key: "2",
                                                    value: "2 years"
                                                  },
                                                  {
                                                    key: "3",
                                                    value: "3 years"
                                                  },
                                                  {
                                                    key: "4",
                                                    value: "4 years"
                                                  },
                                                  {
                                                    key: "5",
                                                    value: "5 to 9 years"
                                                  },
                                                  {
                                                    key: "10",
                                                    value: "10 years or greater"
                                                  }
                                                ]
                                              },
                                              predicate: {
                                                op: "in",
                                                path: "address.residentialAddress.yearsAtAddress",
                                                value: [
                                                  "0",
                                                  "1",
                                                  "2",
                                                  "3",
                                                  "4",
                                                  "5",
                                                  "10"
                                                ]
                                              },
                                              errorMessage: "Years at address is required"
                                            },
                                            {
                                              component: "rs-form-select",
                                              name: "homeOwnership",
                                              appModelPath: "housing.ownershipStatus",
                                              config: {
                                                placeholder: "Home ownership",
                                                name: "homeOwnership",
                                                options: [
                                                  {
                                                    key: "OwnAHomeWithMortgage",
                                                    value: "I own the home I live in (with mortgage)"
                                                  },
                                                  {
                                                    key: "OwnAHomeWithoutMortgage",
                                                    value: "I own the home I live in (without mortgage)"
                                                  },
                                                  {
                                                    key: "TenantWithMortgage",
                                                    value: "I'm a tenant (but I have a mortgage on another property)"
                                                  },
                                                  {
                                                    key: "TenantWithoutMortgage",
                                                    value: "I'm a tenant (renting)"
                                                  },
                                                  {
                                                    key: "Boarder",
                                                    value: "I'm a boarder"
                                                  },
                                                  {
                                                    key: "LivingWithParents",
                                                    value: "I'm living with parents"
                                                  }
                                                ]
                                              },
                                              predicate: {
                                                op: "in",
                                                path: "housing.ownershipStatus",
                                                value: [
                                                  "OwnAHomeWithMortgage",
                                                  "OwnAHomeWithoutMortgage",
                                                  "TenantWithMortgage",
                                                  "TenantWithoutMortgage",
                                                  "Boarder",
                                                  "LivingWithParents"
                                                ]
                                              },
                                              errorMessage: "Home ownership is required"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      component: "rs-section",
                                      name: "previousAddressSection",
                                      appModelPath: "address.previousAddress",
                                      initState: {
                                        hidden: true
                                      },
                                      ch: [
                                        {
                                          component: "rs-ui-container",
                                          name: "previousResidentialAddressContainer",
                                          appModelPath: "address.previousAddress.previousResidentialAddressContainer",
                                          service: "addressService",
                                          ch: [
                                            {
                                              component: "rs-form-subtitle",
                                              name: "previousAddressDetailsSubtitle",
                                              content: "Previous Address Details",
                                              cssClass: "page-subtitle"
                                            },
                                            {
                                              component: "rs-section",
                                              name: "harmonyPreviousAddressWrapper",
                                              appModelPath: "address.previousAddress.harmonyPreviousAddressWrapper",
                                              initState: {
                                                hidden: false
                                              },
                                              ch: [
                                                {
                                                  component: "rs-form-address-input",
                                                  name: "previousResidentialAddress",
                                                  appModelPath: "address.previousAddress.fullAddress",
                                                  attrs: {
                                                    placeholder: "Start typing your previous home address"
                                                  },
                                                  errorMessage: "Previous address is required"
                                                },
                                                {
                                                  component: "rs-form-link",
                                                  name: "manualPreviousAddressLink",
                                                  content: "Enter address manually",
                                                  cssClass: "address-link"
                                                }
                                              ]
                                            },
                                            {
                                              component: "rs-section",
                                              name: "manualPreviousAddressWrapper",
                                              appModelPath: "address.previousAddress.manualPreviousAddressWrapper",
                                              initState: {
                                                hidden: true
                                              },
                                              ch: [
                                                {
                                                  component: "rs-section",
                                                  name: "previousAddressDetails",
                                                  appModelPath: "address.previousAddress.sectionWrapper",
                                                  ch: [
                                                    {
                                                      component: "rs-form-input",
                                                      name: "unitNumber",
                                                      appModelPath: "address.previousAddress.unitNumber",
                                                      attrs: {
                                                        placeholder: "Unit number",
                                                        type: "text",
                                                        name: "previousAddress.unitNumber"
                                                      }
                                                    },
                                                    {
                                                      component: "rs-form-input",
                                                      name: "streetNumber",
                                                      appModelPath: "address.previousAddress.streetNumber",
                                                      attrs: {
                                                        placeholder: "Street number",
                                                        type: "text",
                                                        name: "previousAddress.streetNumber"
                                                      },
                                                      predicate: {
                                                        op: "matches",
                                                        value: "^.+$",
                                                        path: "address.previousAddress.streetNumber"
                                                      },
                                                      errorMessage: "Street number is required"
                                                    },
                                                    {
                                                      component: "rs-form-input",
                                                      name: "street",
                                                      appModelPath: "address.previousAddress.street",
                                                      attrs: {
                                                        placeholder: "Street",
                                                        type: "text",
                                                        name: "previousAddress.street"
                                                      },
                                                      predicate: {
                                                        op: "matches",
                                                        value: "^[ '&a-zA-Z\\-]{2,30}$",
                                                        path: "address.previousAddress.street"
                                                      },
                                                      errorMessage: "Street name is required"
                                                    },
                                                    {
                                                      component: "rs-form-input",
                                                      name: "suburb",
                                                      appModelPath: "address.previousAddress.suburb",
                                                      attrs: {
                                                        placeholder: "Suburb",
                                                        type: "text",
                                                        name: "previousAddress.suburb"
                                                      },
                                                      predicate: {
                                                        op: "matches",
                                                        value: "^[ '&a-zA-Z\\-]{2,30}$",
                                                        path: "address.previousAddress.suburb"
                                                      },
                                                      errorMessage: "Suburb name is required"
                                                    },
                                                    {
                                                      component: "rs-form-input",
                                                      name: "postCode",
                                                      appModelPath: "address.previousAddress.postCode",
                                                      attrs: {
                                                        placeholder: "Postcode",
                                                        type: "text",
                                                        name: "address.previousAddress.postCode"
                                                      },
                                                      predicate: {
                                                        op: "matches",
                                                        value: "^\\d{4}$",
                                                        path: "address.previousAddress.postCode"
                                                      },
                                                      errorMessage: "Postcode is required"
                                                    },
                                                    {
                                                      component: "rs-form-select",
                                                      name: "state",
                                                      appModelPath: "address.previousAddress.state",
                                                      config: {
                                                        placeholder: "State",
                                                        name: "address.previousAddress.state",
                                                        options: [
                                                          {
                                                            key: "ACT",
                                                            value: "ACT"
                                                          },
                                                          {
                                                            key: "NSW",
                                                            value: "NSW"
                                                          },
                                                          {
                                                            key: "SA",
                                                            value: "SA"
                                                          },
                                                          {
                                                            key: "TAS",
                                                            value: "TAS"
                                                          },
                                                          {
                                                            key: "QLD",
                                                            value: "QLD"
                                                          },
                                                          {
                                                            key: "VIC",
                                                            value: "VIC"
                                                          },
                                                          {
                                                            key: "WA",
                                                            value: "WA"
                                                          },
                                                          {
                                                            key: "NT",
                                                            value: "NT"
                                                          }
                                                        ]
                                                      },
                                                      predicate: {
                                                        op: "in",
                                                        path: "address.previousAddress.state",
                                                        value: [
                                                          "ACT",
                                                          "NSW",
                                                          "SA",
                                                          "TAS",
                                                          "QLD",
                                                          "VIC",
                                                          "WA",
                                                          "NT"
                                                        ]
                                                      },
                                                      errorMessage: "State is required"
                                                    }
                                                  ]
                                                },
                                                {
                                                  component: "rs-form-link",
                                                  name: "backToHarmonyPreviousAddressLink",
                                                  content: "Back to address search",
                                                  cssClass: "address-link"
                                                }
                                              ]
                                            },
                                            {
                                              component: "rs-form-select",
                                              name: "previousAddressYearsAtAddress",
                                              appModelPath: "address.previousAddress.yearsAtAddress",
                                              config: {
                                                placeholder: "Years at previous address",
                                                name: "address.previousAddress.yearsAtAddress",
                                                options: [
                                                  {
                                                    key: "0",
                                                    value: "Less than 12 months"
                                                  },
                                                  {
                                                    key: "1",
                                                    value: "1 year"
                                                  },
                                                  {
                                                    key: "2",
                                                    value: "2 years"
                                                  },
                                                  {
                                                    key: "3",
                                                    value: "3 years"
                                                  },
                                                  {
                                                    key: "4",
                                                    value: "4 years"
                                                  },
                                                  {
                                                    key: "5",
                                                    value: "5 to 9 years"
                                                  },
                                                  {
                                                    key: "10",
                                                    value: "10 years or greater"
                                                  }
                                                ]
                                              },
                                              predicate: {
                                                op: "in",
                                                path: "address.previousAddress.yearsAtAddress",
                                                value: [
                                                  "0",
                                                  "1",
                                                  "2",
                                                  "3",
                                                  "4",
                                                  "5",
                                                  "10"
                                                ]
                                              },
                                              errorMessage: "Years at address is required"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      component: "rs-section",
                                      name: "financialDetails",
                                      cssClass: "financial-details",
                                      ch: [
                                        {
                                          component: "rs-form-subtitle",
                                          name: "financialDetailsSubtitle",
                                          index: 4,
                                          content: "Your income and employment",
                                          cssClass: "page-subtitle"
                                        },
                                        {
                                          component: "rs-form-currency-input",
                                          name: "income",
                                          appModelPath: "finances.income",
                                          cssClass: "col-xs-12",
                                          config: {
                                            placeholder: "Annual pre-tax income"
                                          },
                                          service: "incomeService",
                                          controlTarget: {
                                            type: "show",
                                            target: "finances.grossIncomeThreshold",
                                            data: {
                                              grossIncomeValue: "finances.income"
                                            }
                                          },
                                          errorMessage: "Enter your ANNUAL pre-tax income"
                                        },
                                        {
                                          component: "rs-message",
                                          name: "grossIncomeThreshold",
                                          appModelPath: "finances.grossIncomeThreshold",
                                          cssClass: "col-xs-12 last-sm message-bubble",
                                          initState: {
                                            hidden: true
                                          },
                                          config: {
                                            name: "grossIncomeThresholdMessage",
                                            content: "<span class=\"important\">Important:</span> please make sure this is your annual income",
                                            type: "info"
                                          }
                                        },
                                        {
                                          component: "rs-form-select",
                                          name: "employment",
                                          appModelPath: "finances.employment",
                                          cssClass: "col-xs-12",
                                          config: {
                                            placeholder: "Employment status",
                                            name: "employment",
                                            options: [
                                              {
                                                key: "FullTime",
                                                value: "Full time"
                                              },
                                              {
                                                key: "PartTime",
                                                value: "Part time",
                                                showTarget: "employment-message-6-months"
                                              },
                                              {
                                                key: "Contract",
                                                value: "Contract",
                                                showTarget: "employment-message-6-months"
                                              },
                                              {
                                                key: "SelfEmployed",
                                                value: "Self employed",
                                                showTarget: "employment-message-12-months"
                                              },
                                              {
                                                key: "Retired",
                                                value: "Retired"
                                              },
                                              {
                                                key: "CurrentlyUnemployed",
                                                value: "Unemployed"
                                              },
                                              {
                                                key: "Casual",
                                                value: "Casual",
                                                showTarget: "employment-message-6-months"
                                              },
                                              {
                                                key: "AgedOrServicePensioner",
                                                value: "Pensioner"
                                              }
                                            ]
                                          },
                                          predicate: {
                                            op: "in",
                                            path: "finances.employment",
                                            value: [
                                              "FullTime",
                                              "PartTime",
                                              "Contract",
                                              "SelfEmployed",
                                              "SoleTrader",
                                              "Retired",
                                              "CurrentlyUnemployed",
                                              "Casual",
                                              "AgedOrServicePensioner"
                                            ]
                                          },
                                          errorMessage: "Employment type is required"
                                        },
                                        {
                                          component: "rs-message",
                                          name: "employment-message-6-months",
                                          cssClass: "col-xs-12",
                                          initState: {
                                            hidden: true
                                          },
                                          config: {
                                            name: "employmentStatusMessage",
                                            content: "This employment status requires a minimum of 6 months in your current role",
                                            type: "warning",
                                            icon: "fa fa-question-circle"
                                          }
                                        },
                                        {
                                          component: "rs-message",
                                          name: "employment-message-12-months",
                                          cssClass: "col-xs-12",
                                          initState: {
                                            hidden: true
                                          },
                                          config: {
                                            name: "employmentStatusMessage",
                                            content: "This employment status requires a minimum of 12 months in your current role",
                                            type: "warning",
                                            icon: "fa fa-question-circle"
                                          }
                                        },
                                        {
                                          component: "rs-form-select",
                                          name: "numberOfDependants",
                                          appModelPath: "finances.numberOfDependants",
                                          cssClass: "col-xs-12",
                                          config: {
                                            placeholder: "Number of dependent children",
                                            name: "numberOfDependants",
                                            options: [
                                              {
                                                key: "0",
                                                value: "0"
                                              },
                                              {
                                                key: "1",
                                                value: "1"
                                              },
                                              {
                                                key: "2",
                                                value: "2"
                                              },
                                              {
                                                key: "3",
                                                value: "3"
                                              },
                                              {
                                                key: "4",
                                                value: "4"
                                              },
                                              {
                                                key: "5",
                                                value: "5"
                                              },
                                              {
                                                key: "6",
                                                value: "6"
                                              },
                                              {
                                                key: "7",
                                                value: "7"
                                              },
                                              {
                                                key: "8",
                                                value: "8"
                                              }
                                            ]
                                          },
                                          predicate: {
                                            op: "in",
                                            path: "finances.numberOfDependants",
                                            value: [
                                              "0",
                                              "1",
                                              "2",
                                              "3",
                                              "4",
                                              "5",
                                              "6",
                                              "7",
                                              "8"
                                            ]
                                          },
                                          errorMessage: "Number of dependants is required"
                                        }
                                      ]
                                    },
                                    {
                                      component: "rs-section",
                                      name: "termsAndConditions",
                                      cssClass: "terms-and-conditions",
                                      ch: [
                                        {
                                          component: "rs-form-subtitle",
                                          name: "termsAndConditionsSubtitle",
                                          index: 5,
                                          content: "Complete and submit",
                                          cssClass: "page-subtitle"
                                        },
                                        {
                                          component: "rs-form-yes-no",
                                          name: "creditReportingAgreement",
                                          appModelPath: "termsAndConditions.creditReportingAgreement",
                                          config: {
                                            content: "I authorise Plenti Pty Limited to act as my agent and contact a credit reporting body on my behalf to access my credit report.",
                                            initialValue: false
                                          },
                                          errorMessage: "This field is required",
                                          initState: {
                                            required: true
                                          }
                                        },
                                        {
                                          component: "rs-form-yes-no",
                                          name: "privacyAgreement",
                                          appModelPath: "termsAndConditions.privacyAgreement",
                                          config: {
                                            content: "I have read and agree to the <a href=\"https://www.plenti.com.au/about-us/legal/terms-and-conditions\" target=\"_blank\">Terms and Conditions</a>, and <a href=\"https://www.plenti.com.au/privacy/statement/\" target=\"_blank\">Privacy Statement and Electronic Communications Consent</a>. If I am not eligible for a RateEstimate, I agree that my personal information may be referred to a third party who may be able to assist me with a loan. Plenti may be paid a commission for this referral.",
                                            initialValue: false
                                          },
                                          errorMessage: "This field is required",
                                          initState: {
                                            required: true
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      component: "rs-form-submit",
                                      name: "formSubmitButton",
                                      initState: {
                                        hidden: false
                                      },
                                      config: {
                                        text: "Get your personalised quote",
                                        subText: "Getting a quote won't affect your credit score.",
                                        errorText: "Oops... You seem to have missed some fields. Please complete these and submit again"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              component: "rs-section",
                              name: "award-section",
                              cssClass: "award-section row center-xs",
                              ch: [
                                {
                                  component: "rs-content-image",
                                  name: "award-canstar",
                                  cssClass: "award col-xs-2",
                                  config: {
                                    alt: "Canstar Oustanding Value - Personal Loan",
                                    src: "awards/award-canstar-personal-loan.png"
                                  }
                                },
                                {
                                  component: "rs-content-image",
                                  name: "award-canstar",
                                  cssClass: "col-xs-2",
                                  config: {
                                    alt: "Canstar Oustanding Value - Car Loan",
                                    src: "awards/award-canstar-car-loan.png"
                                  }
                                },
                                {
                                  component: "rs-content-image",
                                  name: "award-finnies",
                                  cssClass: "col-xs-3",
                                  config: {
                                    alt: "Winner of RateCity's Gold Award Excellent Credit - Personal Loan",
                                    src: "awards/award-ratecity.png"
                                  }
                                },
                                {
                                  component: "rs-content-image",
                                  name: "award-mozo",
                                  cssClass: "col-xs-2",
                                  config: {
                                    alt: "Mozo Experts Choice - Excellent Credit Personal Loan",
                                    src: "awards/award-mozo.png"
                                  }
                                },
                                {
                                  component: "rs-content-image",
                                  name: "award-infochoice",
                                  cssClass: "col-xs-2",
                                  config: {
                                    alt: "Winner of InfoChoice - Personal Loan Lender",
                                    src: "awards/award-infochoice.svg"
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          component: "rs-section",
                          name: "aside-section",
                          cssClass: "re-aside hidden-md",
                          ch: [
                            {
                              component: "rs-section",
                              name: "aside-section-about-ratesetter",
                              cssClass: "divider",
                              ch: [
                                {
                                  component: "rs-content-heading",
                                  name: "aside-about-ratesetter-heading",
                                  config: {
                                    level: 5,
                                    content: "Borrowers"
                                  }
                                },
                                {
                                  component: "rs-content-paragraph",
                                  name: "aside-about-ratesetter-paragraph",
                                  config: {
                                    content: "Plenti makes borrowing more rewarding. With flexible personal loans at competitive rates, borrowers can get ahead in life and achieve more with their money. It's fairer finance that works for everyone."
                                  }
                                }
                              ]
                            },
                            {
                              component: "rs-section",
                              name: "aside-section-about-ratesetter",
                              cssClass: "divider",
                              ch: [
                                {
                                  component: "rs-content-image",
                                  name: "aside-product-review-winner",
                                  config: {
                                    alt: "ProductReview.com.au 2019 Awards Winner",
                                    src: "awards/product-review-awards-winner.png"
                                  }
                                },
                                {
                                  component: "rs-content-image",
                                  name: "aside-product-review-stars",
                                  config: {
                                    alt: "4.8",
                                    src: "awards/product-review-stars.png"
                                  }
                                },
                                {
                                  component: "rs-content-paragraph",
                                  name: "aside-product-review-paragraph",
                                  cssClass: "small-text",
                                  config: {
                                    content: "from 1,874 Reviews"
                                  }
                                }
                              ]
                            },
                            {
                              component: "rs-section",
                              name: "aside-section-about-ratesetter",
                              cssClass: "divider",
                              ch: [
                                {
                                  component: "rs-section",
                                  name: "award",
                                  cssClass: "award-section row",
                                  ch: [
                                    {
                                      component: "rs-content-image",
                                      name: "award-canstar",
                                      cssClass: "award",
                                      config: {
                                        alt: "Canstar Oustanding Value - Personal Loan",
                                        src: "awards/award-canstar-personal-loan.png"
                                      }
                                    },
                                    {
                                      component: "rs-content-image",
                                      name: "award-canstar",
                                      cssClass: "award",
                                      config: {
                                        alt: "Canstar Oustanding Value - Personal Loan",
                                        src: "awards/award-canstar-car-loan.png"
                                      }
                                    }
                                  ]
                                },
                                {
                                  component: "rs-content-paragraph",
                                  name: "aside-product-review-paragraph",
                                  cssClass: "small-text",
                                  config: {
                                    content: "Winner of Canstar’s Outstanding Value Personal Loan and Car Loan 2020"
                                  }
                                }
                              ]
                            },
                            {
                              component: "rs-section",
                              name: "aside-section-about-ratesetter",
                              cssClass: "divider",
                              ch: [
                                {
                                  component: "rs-content-image",
                                  name: "award-rateCity",
                                  cssClass: "award",
                                  config: {
                                    alt: "Winner of RateCity's Gold Award Excellent Credit - Personal Loan",
                                    src: "awards/award-ratecity.png"
                                  }
                                },
                                {
                                  component: "rs-content-paragraph",
                                  name: "aside-product-review-paragraph",
                                  cssClass: "small-text",
                                  config: {
                                    content: "Winner of RateCity's Gold Award Excellent Credit Personal Loans 2020, 2021"
                                  }
                                }
                              ]
                            },
                            {
                              component: "rs-section",
                              name: "aside-section-about-ratesetter",
                              cssClass: "divider",
                              ch: [
                                {
                                  component: "rs-content-image",
                                  name: "award-mozo",
                                  cssClass: "award",
                                  config: {
                                    alt: "Mozo Experts Choice - Excellent Credit Personal Loan",
                                    src: "awards/award-mozo.png"
                                  }
                                },
                                {
                                  component: "rs-content-paragraph",
                                  name: "aside-product-review-paragraph",
                                  cssClass: "small-text",
                                  config: {
                                    content: "Winner of Mozo's Unsecured Personal Loan 2019"
                                  }
                                }
                              ]
                            },
                            {
                              component: "rs-section",
                              name: "aside-section-about-ratesetter",
                              cssClass: "divider",
                              ch: [
                                {
                                  component: "rs-content-image",
                                  name: "award-infochoice",
                                  cssClass: "award",
                                  config: {
                                    alt: "Winner of InfoChoice - Personal Loan Lender",
                                    src: "awards/award-infochoice.svg"
                                  }
                                },
                                {
                                  component: "rs-content-paragraph",
                                  name: "aside-product-review-paragraph",
                                  cssClass: "small-text",
                                  config: {
                                    content: "Winner of InfoChoice Personal Loan Lender of the Year 2021"
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  component: "rs-footer",
                  name: "footer",
                    config: {
                       termsConditions: "<p>Rates and repayments indicated are estimates only and are subject to change at any time without notice.<br />Displayed loan options do not constitute an offer for credit.</p><p>The information and any advice on this website has been prepared without taking account of your objectives, financial situation or needs. Before acting upon any advice, you should consider whether it is appropriate for you. Plenti Pty Limited does not provide any assurance, guarantee or recommendation in relation to any information presented on this webpage.<br />Plenti takes your privacy seriously. All information about you is held subject to our Privacy Policy.<br />Copyright © 2020. All rights reserved.</p>"
                    }
                }
              ]
            },
            Name: "RateEstimate",
            _links: [
              {
                Rel: "",
                Href: "/uidefinition/664fa83d-ac98-411d-8b08-6540ac48733f"
              }
            ]
          }),
        },
        withRequest: {
          method: 'GET',
          path: '/ApplicationService/UiDefinition/name/RateEstimate',
        },
      })
    );

    it('returns server health', () => // implicit return again
      client.getUiDefinition('RateEstimate').then(definition => {
        expect(definition).toEqual({
          Id: "664fa83d-ac98-411d-8b08-6540ac48733f",
          UiDefinition: {
            component: "rs-ui-container",
            name: "rootContainer",
            ch: [
              {
                component: "rs-nav",
                name: "nav"
              },
              {
                component: "rs-header",
                name: "header",
                config: {
                  prefix: "TAKES 1 MINUTE",
                  title: "Get a personalised quote",
                  content: "Calculate how much you could borrow and get your personalised interest rate"
                },
                cssClass: "rate-estimate-header"
              },
              {
                component: "rs-ui-container",
                name: "bodyContainer",
                cssClass: "body-container",
                ch: [
                  {
                    component: "rs-section",
                    name: "main-section",
                    cssClass: "main-section row",
                    ch: [
                      {
                        component: "rs-marketing-rate-estimate",
                        name: "marketing-rate-estimate",
                        ch: [
                          {
                            component: "rs-content-modal",
                            name: "marketing-rate-estimate-modal",
                            cssClass: "wont-affect-your-credit-score",
                            config: {
                              content: "Getting a quote won't affect your credit score. {{toggleModal}}",
                              toggleModalText: "Learn more"
                            },
                            ch: [
                              {
                                component: "rs-content-heading",
                                name: "marketing-modal-title",
                                config: {
                                  level: 3,
                                  content: "Did you know?"
                                }
                              },
                              {
                                component: "rs-content-paragraph",
                                name: "marketing-modal-description",
                                config: {
                                  content: "Completing our RateEstimate to find out how much you can borrow won’t affect your credit score."
                                }
                              },
                              {
                                component: "rs-ui-container",
                                name: "marketing-modal-bottom",
                                cssClass: "marketing-modal-bottom",
                                ch: [
                                  {
                                    component: "rs-content-heading",
                                    name: "marketing-modal-bottom-subtitle",
                                    config: {
                                      level: 5,
                                      content: "What actually happens?"
                                    }
                                  },
                                  {
                                    component: "rs-content-paragraph",
                                    name: "marketing-modal-bottom-description",
                                    config: {
                                      content: "When you request a RateEstimate, Plenti Pty Limited will request your credit file as an ‘access seeker’ from Equifax and/or Illion. This request will only be visible to you and other access seekers, will not be visible to credit providers, and will not affect your Equifax or Illion credit score."
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        component: "rs-ui-container",
                        name: "rateEstimateFormContainer",
                        cssClass: "form-container col-xs-12",
                        ch: [
                          {
                            component: "rs-form",
                            name: "rateEstimateForm",
                            validators: [
                              {
                                validator: "dateOfBirth",
                                target: "applicant.dateOfBirth.isoString"
                              }
                            ],
                            ch: [
                              {
                                component: "rs-section",
                                name: "loan",
                                appModelPath: "loan",
                                ch: [
                                  {
                                    component: "rs-ui-container",
                                    name: "loanAmountContainer",
                                    initState: {
                                      hidden: false
                                    },
                                    cssClass: "form-container col-xs-12",
                                    ch: [
                                      {
                                        component: "rs-form-subtitle",
                                        name: "loanInfoSubtitle",
                                        index: 1,
                                        content: "How much would you like to borrow?",
                                        cssClass: "page-subtitle"
                                      },
                                      {
                                        component: "rs-form-currency-input",
                                        name: "amount",
                                        appModelPath: "loan.amount",
                                        cssClass: "prominent",
                                        config: {
                                          placeholder: "Amount between $5,000 and $45,000",
                                          minimumAmount: 5000,
                                          maximumAmount: 45000
                                        },
                                        attrs: {
                                          autoFocus: true
                                        },
                                        errorMessage: "Enter your loan amount"
                                      }
                                    ]
                                  },
                                  {
                                    component: "rs-form-select",
                                    name: "purpose",
                                    appModelPath: "loan.purpose",
                                    service: "loanInfoService",
                                    controlTarget: {
                                      type: "hide",
                                      targets: {
                                        purposeReason: "loan.purposeReason",
                                        useOfFund: "loan.useOfFund",
                                        autoDirectLink: "loan.autoDirectLink"
                                      }
                                    },
                                    config: {
                                      placeholder: "Loan purpose",
                                      title: "Loan Purpose",
                                      name: "purpose",
                                      options: [
                                        {
                                          key: "DebtConsolidation",
                                          value: "Debt Consolidation",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "Car",
                                          value: "Car",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "HomeImprovement",
                                          value: "Home Improvement",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "Holiday",
                                          value: "Holiday",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "Wedding",
                                          value: "Wedding",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "Repairs",
                                          value: "Repairs",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "MovingCosts",
                                          value: "Moving Costs",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "RentalBond",
                                          value: "Rental Bond",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "PayBills",
                                          value: "Pay Bills",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "SolarBattery",
                                          value: "Solar / Battery",
                                          showTarget: [
                                            "greenLoanLink"
                                          ]
                                        },
                                        {
                                          key: "MedicalDental",
                                          value: "Medical",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "ProfessionalServiceFees",
                                          value: "Legal / Professional Services",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer",
                                            "legalFinanceReferralMessage"
                                          ]
                                        },
                                        {
                                          key: "Boat",
                                          value: "Boat",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "Motorbike",
                                          value: "Motorbike",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "FuneralExpenses",
                                          value: "Funeral Expenses",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "Business",
                                          value: "Business",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "Investment",
                                          value: "Investment",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "PersonalIncomeTax",
                                          value: "Personal Income Tax",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer"
                                          ]
                                        },
                                        {
                                          key: "Other",
                                          value: "Other",
                                          showTarget: [
                                            "sectionContainer",
                                            "loanAmountContainer",
                                            "loan.purposeReason"
                                          ]
                                        }
                                      ]
                                    },
                                    predicate: {
                                      op: "in",
                                      path: "loan.purpose",
                                      value: [
                                        "DebtConsolidation",
                                        "Car",
                                        "Motorbike",
                                        "HomeImprovement",
                                        "Holiday",
                                        "Wedding",
                                        "Repairs",
                                        "MovingCosts",
                                        "RentalBond",
                                        "PayBills",
                                        "ProfessionalServiceFees",
                                        "Business",
                                        "Investment",
                                        "FuneralExpenses",
                                        "SolarBattery",
                                        "MedicalDental",
                                        "Boat",
                                        "Other",
                                        "PersonalIncomeTax"
                                      ]
                                    },
                                    errorMessage: "Loan purpose is required"
                                  },
                                  {
                                    component: "rs-message-referral",
                                    name: "autoDirectLink",
                                    appModelPath: "loan.autoDirectLink",
                                    config: {
                                      name: "autoDirectReferMessage",
                                      type: "info",
                                      referralType: "autoDirect"
                                    },
                                    initState: {
                                      hidden: true
                                    }
                                  },
                                  {
                                    component: "rs-message-referral",
                                    name: "greenLoanLink",
                                    config: {
                                      type: "info",
                                      referralType: "greenLoan"
                                    },
                                    initState: {
                                      hidden: true
                                    }
                                  },
                                  {
                                    component: "rs-message-referral",
                                    name: "legalFinanceReferralMessage",
                                    config: {
                                      type: "info",
                                      referralType: "legalFinance"
                                    },
                                    initState: {
                                      hidden: true
                                    }
                                  },
                                  {
                                    component: "rs-form-input",
                                    name: "purposeReason",
                                    appModelPath: "loan.purposeReason",
                                    attrs: {
                                      placeholder: "What is the purpose?",
                                      type: "text"
                                    },
                                    initState: {
                                      hidden: true
                                    },
                                    predicate: {
                                      op: "matches",
                                      path: "loan.purposeReason",
                                      value: "^.{1,40}$"
                                    },
                                    errorMessage: "A description is required of up to 40 characters"
                                  },
                                  {
                                    component: "rs-form-input",
                                    name: "loan.useOfFund",
                                    appModelPath: "loan.useOfFund",
                                    attrs: {
                                      placeholder: "Describe the use of funds",
                                      type: "text"
                                    },
                                    initState: {
                                      hidden: true
                                    },
                                    predicate: {
                                      op: "matches",
                                      path: "loan.useOfFund",
                                      value: "^.{1,40}$"
                                    },
                                    errorMessage: "A description is required of up to 40 charaters"
                                  }
                                ]
                              },
                              {
                                component: "rs-ui-container",
                                name: "sectionContainer",
                                initState: {
                                  hidden: false
                                },
                                cssClass: "form-container col-xs-12",
                                ch: [
                                  {
                                    component: "rs-section",
                                    name: "personalDetails",
                                    cssClass: "row",
                                    ch: [
                                      {
                                        component: "rs-form-subtitle",
                                        name: "personalDetailsSubtitle",
                                        index: 2,
                                        content: "Your details",
                                        cssClass: "page-subtitle"
                                      },
                                      {
                                        component: "rs-section",
                                        name: "applicant.name",
                                        cssClass: "row",
                                        ch: [
                                          {
                                            component: "rs-message",
                                            name: "heading",
                                            cssClass: "col-xs-12",
                                            config: {
                                              name: "nameMatchMessage",
                                              content: "<span class=\"important\">Important:</span> Enter your name and date of birth as it appears on your driver licence or passport as this will help us identify you.",
                                              type: "info"
                                            }
                                          },
                                          {
                                            component: "rs-form-input",
                                            name: "firstName",
                                            appModelPath: "applicant.firstName",
                                            attrs: {
                                              placeholder: "First name",
                                              type: "text",
                                              name: "firstName"
                                            },
                                            cssClass: "col-xs-12 col-sm-4 col-sm-gutter-right",
                                            errorMessage: "Invalid first name",
                                            predicate: {
                                              op: "matches",
                                              path: "applicant.firstName",
                                              value: "^[a-zA-Z]([ ]?[a-zA-Z\\-']){0,39}$"
                                            },
                                            icons: {
                                              left: "far fa-user"
                                            }
                                          },
                                          {
                                            component: "rs-form-input",
                                            name: "middleName",
                                            appModelPath: "applicant.middleName",
                                            attrs: {
                                              placeholder: "Middle name",
                                              type: "text",
                                              name: "middleName"
                                            },
                                            cssClass: "col-xs-12 col-sm-4 col-sm-gutter-right",
                                            errorMessage: "Invalid middle name",
                                            predicate: {
                                              op: "matches",
                                              path: "applicant.middleName",
                                              value: "^$|^[a-zA-Z]([ ]?[a-zA-Z\\-']){1,}$"
                                            },
                                            initState: {
                                              required: false
                                            },
                                            icons: {
                                              left: "far fa-user"
                                            }
                                          },
                                          {
                                            component: "rs-form-input",
                                            name: "lastName",
                                            appModelPath: "applicant.lastName",
                                            attrs: {
                                              placeholder: "Last name",
                                              type: "text",
                                              name: "lastName"
                                            },
                                            cssClass: "col-xs-12 col-sm-4",
                                            errorMessage: "Invalid last name",
                                            predicate: {
                                              op: "matches",
                                              path: "applicant.lastName",
                                              value: "^[a-zA-Z]([ ]?[a-zA-Z\\-']){0,49}$"
                                            },
                                            icons: {
                                              left: "far fa-user"
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        component: "rs-form-input",
                                        name: "email",
                                        cssClass: "col-xs-12",
                                        appModelPath: "contact.email",
                                        attrs: {
                                          placeholder: "Email address",
                                          type: "text",
                                          name: "email"
                                        },
                                        errorMessage: "Email address is required",
                                        predicate: {
                                          op: "matches",
                                          path: "contact.email",
                                          value: "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+(?!con)[a-zA-Z](?:[a-zA-Z-]*[a-zA-Z])$"
                                        },
                                        icons: {
                                          left: "far fa-envelope"
                                        }
                                      },
                                      {
                                        component: "rs-form-input",
                                        name: "mobile",
                                        cssClass: "col-xs-12",
                                        appModelPath: "contact.mobileNumber",
                                        attrs: {
                                          placeholder: "Mobile number",
                                          type: "tel",
                                          name: "mobileNumber",
                                          autoComplete: false
                                        },
                                        errorMessage: "Invalid mobile number (e.g. 0400123456)",
                                        predicate: {
                                          op: "matches",
                                          path: "contact.mobileNumber",
                                          value: "^04\\d{8}$"
                                        },
                                        icons: {
                                          left: "fas fa-mobile-alt"
                                        }
                                      },
                                      {
                                        component: "rs-form-input",
                                        name: "dateOfBirthInputString",
                                        cssClass: "col-xs-12",
                                        appModelPath: "applicant.dateOfBirth.isoString",
                                        attrs: {
                                          placeholder: "Date of birth (DD/MM/YYYY)",
                                          type: "tel",
                                          name: "dateOfBirth",
                                          maxLength: 10
                                        },
                                        mask: "dob",
                                        errorMessage: "Invalid date of birth (DD/MM/YYYY)",
                                        predicate: {
                                          op: "matches",
                                          path: "applicant.dateOfBirth.isoString",
                                          value: "^(\\d\\d\\d\\d)(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?$"
                                        },
                                        icons: {
                                          left: "far fa-calendar"
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    component: "rs-section",
                                    name: "individualAddressSection",
                                    ch: [
                                      {
                                        component: "rs-ui-container",
                                        name: "residentialAddressContainer",
                                        appModelPath: "address.residentialAddress.residentialAddressContainer",
                                        service: "addressService",
                                        ch: [
                                          {
                                            component: "rs-form-subtitle",
                                            name: "addressDetailsSubtitle",
                                            index: 3,
                                            content: "Your home address",
                                            cssClass: "page-subtitle"
                                          },
                                          {
                                            component: "rs-form-hint",
                                            name: "addressDetailsSubtitleDescription",
                                            content: "Start typing your address below. If your address does not appear, enter it manually.",
                                            cssClass: "page-text"
                                          },
                                          {
                                            component: "rs-section",
                                            name: "harmonyAddressWrapper",
                                            appModelPath: "address.residentialAddress.harmonyAddressWrapper",
                                            initState: {
                                              hidden: false
                                            },
                                            ch: [
                                              {
                                                component: "rs-form-address-input",
                                                name: "residentialAddress",
                                                appModelPath: "address.residentialAddress.fullAddress",
                                                cssClass: "prominent",
                                                attrs: {
                                                  placeholder: "Start typing your home address"
                                                },
                                                errorMessage: "Residential address is required"
                                              },
                                              {
                                                component: "rs-form-link",
                                                name: "manualAddressLink",
                                                content: "Enter address manually +",
                                                cssClass: "address-link"
                                              }
                                            ]
                                          },
                                          {
                                            component: "rs-section",
                                            name: "manualAddressWrapper",
                                            appModelPath: "address.residentialAddress.manualAddressWrapper",
                                            initState: {
                                              hidden: true
                                            },
                                            ch: [
                                              {
                                                component: "rs-section",
                                                name: "address",
                                                appModelPath: "address.residentialAddress.sectionWrapper",
                                                ch: [
                                                  {
                                                    component: "rs-form-input",
                                                    name: "unitNumber",
                                                    appModelPath: "address.residentialAddress.unitNumber",
                                                    attrs: {
                                                      placeholder: "Unit number",
                                                      type: "text",
                                                      name: "residentialAddress.unitNumber"
                                                    }
                                                  },
                                                  {
                                                    component: "rs-form-input",
                                                    name: "streetNumber",
                                                    appModelPath: "address.residentialAddress.streetNumber",
                                                    attrs: {
                                                      placeholder: "Street number",
                                                      type: "text",
                                                      name: "residentialAddress.streetNumber"
                                                    },
                                                    predicate: {
                                                      op: "matches",
                                                      value: "^.+$",
                                                      path: "address.residentialAddress.streetNumber"
                                                    },
                                                    errorMessage: "Street number is required"
                                                  },
                                                  {
                                                    component: "rs-form-input",
                                                    name: "street",
                                                    appModelPath: "address.residentialAddress.street",
                                                    attrs: {
                                                      placeholder: "Street",
                                                      type: "text",
                                                      name: "residentialAddress.street"
                                                    },
                                                    predicate: {
                                                      op: "matches",
                                                      value: "^[ '&a-zA-Z\\-]{2,30}$",
                                                      path: "address.residentialAddress.street"
                                                    },
                                                    errorMessage: "Street name is required"
                                                  },
                                                  {
                                                    component: "rs-form-input",
                                                    name: "suburb",
                                                    appModelPath: "address.residentialAddress.suburb",
                                                    attrs: {
                                                      placeholder: "Suburb",
                                                      type: "text",
                                                      name: "residentialAddress.suburb"
                                                    },
                                                    predicate: {
                                                      op: "matches",
                                                      value: "^[ '&a-zA-Z\\-]{2,30}$",
                                                      path: "address.residentialAddress.suburb"
                                                    },
                                                    errorMessage: "Suburb name is rqeuired"
                                                  },
                                                  {
                                                    component: "rs-form-input",
                                                    name: "postCode",
                                                    appModelPath: "address.residentialAddress.postCode",
                                                    attrs: {
                                                      placeholder: "Postcode",
                                                      type: "text",
                                                      name: "residentialAddress.postCode"
                                                    },
                                                    predicate: {
                                                      op: "matches",
                                                      value: "^\\d{4}$",
                                                      path: "address.residentialAddress.postCode"
                                                    },
                                                    errorMessage: "Postcode is required"
                                                  },
                                                  {
                                                    component: "rs-form-select",
                                                    name: "state",
                                                    appModelPath: "address.residentialAddress.state",
                                                    config: {
                                                      placeholder: "State",
                                                      name: "residentialAddress.state",
                                                      options: [
                                                        {
                                                          key: "ACT",
                                                          value: "ACT"
                                                        },
                                                        {
                                                          key: "NSW",
                                                          value: "NSW"
                                                        },
                                                        {
                                                          key: "SA",
                                                          value: "SA"
                                                        },
                                                        {
                                                          key: "TAS",
                                                          value: "TAS"
                                                        },
                                                        {
                                                          key: "QLD",
                                                          value: "QLD"
                                                        },
                                                        {
                                                          key: "VIC",
                                                          value: "VIC"
                                                        },
                                                        {
                                                          key: "WA",
                                                          value: "WA"
                                                        },
                                                        {
                                                          key: "NT",
                                                          value: "NT"
                                                        }
                                                      ]
                                                    },
                                                    predicate: {
                                                      op: "in",
                                                      path: "address.residentialAddress.state",
                                                      value: [
                                                        "ACT",
                                                        "NSW",
                                                        "SA",
                                                        "TAS",
                                                        "QLD",
                                                        "VIC",
                                                        "WA",
                                                        "NT"
                                                      ]
                                                    },
                                                    errorMessage: "State is required"
                                                  }
                                                ]
                                              },
                                              {
                                                component: "rs-form-link",
                                                name: "backToHarmonyAddressLink",
                                                content: "Back to address search",
                                                cssClass: "address-link"
                                              }
                                            ]
                                          },
                                          {
                                            component: "rs-form-select",
                                            name: "residentialAddressYearsAtAddress",
                                            appModelPath: "address.residentialAddress.yearsAtAddress",
                                            service: "addressService",
                                            config: {
                                              placeholder: "Years at address",
                                              name: "residentialAddress.yearsAtAddress",
                                              options: [
                                                {
                                                  key: "0",
                                                  value: "Less than 12 months"
                                                },
                                                {
                                                  key: "1",
                                                  value: "1 year"
                                                },
                                                {
                                                  key: "2",
                                                  value: "2 years"
                                                },
                                                {
                                                  key: "3",
                                                  value: "3 years"
                                                },
                                                {
                                                  key: "4",
                                                  value: "4 years"
                                                },
                                                {
                                                  key: "5",
                                                  value: "5 to 9 years"
                                                },
                                                {
                                                  key: "10",
                                                  value: "10 years or greater"
                                                }
                                              ]
                                            },
                                            predicate: {
                                              op: "in",
                                              path: "address.residentialAddress.yearsAtAddress",
                                              value: [
                                                "0",
                                                "1",
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "10"
                                              ]
                                            },
                                            errorMessage: "Years at address is required"
                                          },
                                          {
                                            component: "rs-form-select",
                                            name: "homeOwnership",
                                            appModelPath: "housing.ownershipStatus",
                                            config: {
                                              placeholder: "Home ownership",
                                              name: "homeOwnership",
                                              options: [
                                                {
                                                  key: "OwnAHomeWithMortgage",
                                                  value: "I own the home I live in (with mortgage)"
                                                },
                                                {
                                                  key: "OwnAHomeWithoutMortgage",
                                                  value: "I own the home I live in (without mortgage)"
                                                },
                                                {
                                                  key: "TenantWithMortgage",
                                                  value: "I'm a tenant (but I have a mortgage on another property)"
                                                },
                                                {
                                                  key: "TenantWithoutMortgage",
                                                  value: "I'm a tenant (renting)"
                                                },
                                                {
                                                  key: "Boarder",
                                                  value: "I'm a boarder"
                                                },
                                                {
                                                  key: "LivingWithParents",
                                                  value: "I'm living with parents"
                                                }
                                              ]
                                            },
                                            predicate: {
                                              op: "in",
                                              path: "housing.ownershipStatus",
                                              value: [
                                                "OwnAHomeWithMortgage",
                                                "OwnAHomeWithoutMortgage",
                                                "TenantWithMortgage",
                                                "TenantWithoutMortgage",
                                                "Boarder",
                                                "LivingWithParents"
                                              ]
                                            },
                                            errorMessage: "Home ownership is required"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    component: "rs-section",
                                    name: "previousAddressSection",
                                    appModelPath: "address.previousAddress",
                                    initState: {
                                      hidden: true
                                    },
                                    ch: [
                                      {
                                        component: "rs-ui-container",
                                        name: "previousResidentialAddressContainer",
                                        appModelPath: "address.previousAddress.previousResidentialAddressContainer",
                                        service: "addressService",
                                        ch: [
                                          {
                                            component: "rs-form-subtitle",
                                            name: "previousAddressDetailsSubtitle",
                                            content: "Previous Address Details",
                                            cssClass: "page-subtitle"
                                          },
                                          {
                                            component: "rs-section",
                                            name: "harmonyPreviousAddressWrapper",
                                            appModelPath: "address.previousAddress.harmonyPreviousAddressWrapper",
                                            initState: {
                                              hidden: false
                                            },
                                            ch: [
                                              {
                                                component: "rs-form-address-input",
                                                name: "previousResidentialAddress",
                                                appModelPath: "address.previousAddress.fullAddress",
                                                attrs: {
                                                  placeholder: "Start typing your previous home address"
                                                },
                                                errorMessage: "Previous address is required"
                                              },
                                              {
                                                component: "rs-form-link",
                                                name: "manualPreviousAddressLink",
                                                content: "Enter address manually",
                                                cssClass: "address-link"
                                              }
                                            ]
                                          },
                                          {
                                            component: "rs-section",
                                            name: "manualPreviousAddressWrapper",
                                            appModelPath: "address.previousAddress.manualPreviousAddressWrapper",
                                            initState: {
                                              hidden: true
                                            },
                                            ch: [
                                              {
                                                component: "rs-section",
                                                name: "previousAddressDetails",
                                                appModelPath: "address.previousAddress.sectionWrapper",
                                                ch: [
                                                  {
                                                    component: "rs-form-input",
                                                    name: "unitNumber",
                                                    appModelPath: "address.previousAddress.unitNumber",
                                                    attrs: {
                                                      placeholder: "Unit number",
                                                      type: "text",
                                                      name: "previousAddress.unitNumber"
                                                    }
                                                  },
                                                  {
                                                    component: "rs-form-input",
                                                    name: "streetNumber",
                                                    appModelPath: "address.previousAddress.streetNumber",
                                                    attrs: {
                                                      placeholder: "Street number",
                                                      type: "text",
                                                      name: "previousAddress.streetNumber"
                                                    },
                                                    predicate: {
                                                      op: "matches",
                                                      value: "^.+$",
                                                      path: "address.previousAddress.streetNumber"
                                                    },
                                                    errorMessage: "Street number is required"
                                                  },
                                                  {
                                                    component: "rs-form-input",
                                                    name: "street",
                                                    appModelPath: "address.previousAddress.street",
                                                    attrs: {
                                                      placeholder: "Street",
                                                      type: "text",
                                                      name: "previousAddress.street"
                                                    },
                                                    predicate: {
                                                      op: "matches",
                                                      value: "^[ '&a-zA-Z\\-]{2,30}$",
                                                      path: "address.previousAddress.street"
                                                    },
                                                    errorMessage: "Street name is required"
                                                  },
                                                  {
                                                    component: "rs-form-input",
                                                    name: "suburb",
                                                    appModelPath: "address.previousAddress.suburb",
                                                    attrs: {
                                                      placeholder: "Suburb",
                                                      type: "text",
                                                      name: "previousAddress.suburb"
                                                    },
                                                    predicate: {
                                                      op: "matches",
                                                      value: "^[ '&a-zA-Z\\-]{2,30}$",
                                                      path: "address.previousAddress.suburb"
                                                    },
                                                    errorMessage: "Suburb name is required"
                                                  },
                                                  {
                                                    component: "rs-form-input",
                                                    name: "postCode",
                                                    appModelPath: "address.previousAddress.postCode",
                                                    attrs: {
                                                      placeholder: "Postcode",
                                                      type: "text",
                                                      name: "address.previousAddress.postCode"
                                                    },
                                                    predicate: {
                                                      op: "matches",
                                                      value: "^\\d{4}$",
                                                      path: "address.previousAddress.postCode"
                                                    },
                                                    errorMessage: "Postcode is required"
                                                  },
                                                  {
                                                    component: "rs-form-select",
                                                    name: "state",
                                                    appModelPath: "address.previousAddress.state",
                                                    config: {
                                                      placeholder: "State",
                                                      name: "address.previousAddress.state",
                                                      options: [
                                                        {
                                                          key: "ACT",
                                                          value: "ACT"
                                                        },
                                                        {
                                                          key: "NSW",
                                                          value: "NSW"
                                                        },
                                                        {
                                                          key: "SA",
                                                          value: "SA"
                                                        },
                                                        {
                                                          key: "TAS",
                                                          value: "TAS"
                                                        },
                                                        {
                                                          key: "QLD",
                                                          value: "QLD"
                                                        },
                                                        {
                                                          key: "VIC",
                                                          value: "VIC"
                                                        },
                                                        {
                                                          key: "WA",
                                                          value: "WA"
                                                        },
                                                        {
                                                          key: "NT",
                                                          value: "NT"
                                                        }
                                                      ]
                                                    },
                                                    predicate: {
                                                      op: "in",
                                                      path: "address.previousAddress.state",
                                                      value: [
                                                        "ACT",
                                                        "NSW",
                                                        "SA",
                                                        "TAS",
                                                        "QLD",
                                                        "VIC",
                                                        "WA",
                                                        "NT"
                                                      ]
                                                    },
                                                    errorMessage: "State is required"
                                                  }
                                                ]
                                              },
                                              {
                                                component: "rs-form-link",
                                                name: "backToHarmonyPreviousAddressLink",
                                                content: "Back to address search",
                                                cssClass: "address-link"
                                              }
                                            ]
                                          },
                                          {
                                            component: "rs-form-select",
                                            name: "previousAddressYearsAtAddress",
                                            appModelPath: "address.previousAddress.yearsAtAddress",
                                            config: {
                                              placeholder: "Years at previous address",
                                              name: "address.previousAddress.yearsAtAddress",
                                              options: [
                                                {
                                                  key: "0",
                                                  value: "Less than 12 months"
                                                },
                                                {
                                                  key: "1",
                                                  value: "1 year"
                                                },
                                                {
                                                  key: "2",
                                                  value: "2 years"
                                                },
                                                {
                                                  key: "3",
                                                  value: "3 years"
                                                },
                                                {
                                                  key: "4",
                                                  value: "4 years"
                                                },
                                                {
                                                  key: "5",
                                                  value: "5 to 9 years"
                                                },
                                                {
                                                  key: "10",
                                                  value: "10 years or greater"
                                                }
                                              ]
                                            },
                                            predicate: {
                                              op: "in",
                                              path: "address.previousAddress.yearsAtAddress",
                                              value: [
                                                "0",
                                                "1",
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "10"
                                              ]
                                            },
                                            errorMessage: "Years at address is required"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    component: "rs-section",
                                    name: "financialDetails",
                                    cssClass: "financial-details",
                                    ch: [
                                      {
                                        component: "rs-form-subtitle",
                                        name: "financialDetailsSubtitle",
                                        index: 4,
                                        content: "Your income and employment",
                                        cssClass: "page-subtitle"
                                      },
                                      {
                                        component: "rs-form-currency-input",
                                        name: "income",
                                        appModelPath: "finances.income",
                                        cssClass: "col-xs-12",
                                        config: {
                                          placeholder: "Annual pre-tax income"
                                        },
                                        service: "incomeService",
                                        controlTarget: {
                                          type: "show",
                                          target: "finances.grossIncomeThreshold",
                                          data: {
                                            grossIncomeValue: "finances.income"
                                          }
                                        },
                                        errorMessage: "Enter your ANNUAL pre-tax income"
                                      },
                                      {
                                        component: "rs-message",
                                        name: "grossIncomeThreshold",
                                        appModelPath: "finances.grossIncomeThreshold",
                                        cssClass: "col-xs-12 last-sm message-bubble",
                                        initState: {
                                          hidden: true
                                        },
                                        config: {
                                          name: "grossIncomeThresholdMessage",
                                          content: "<span class=\"important\">Important:</span> please make sure this is your annual income",
                                          type: "info"
                                        }
                                      },
                                      {
                                        component: "rs-form-select",
                                        name: "employment",
                                        appModelPath: "finances.employment",
                                        cssClass: "col-xs-12",
                                        config: {
                                          placeholder: "Employment status",
                                          name: "employment",
                                          options: [
                                            {
                                              key: "FullTime",
                                              value: "Full time"
                                            },
                                            {
                                              key: "PartTime",
                                              value: "Part time",
                                              showTarget: "employment-message-6-months"
                                            },
                                            {
                                              key: "Contract",
                                              value: "Contract",
                                              showTarget: "employment-message-6-months"
                                            },
                                            {
                                              key: "SelfEmployed",
                                              value: "Self employed",
                                              showTarget: "employment-message-12-months"
                                            },
                                            {
                                              key: "Retired",
                                              value: "Retired"
                                            },
                                            {
                                              key: "CurrentlyUnemployed",
                                              value: "Unemployed"
                                            },
                                            {
                                              key: "Casual",
                                              value: "Casual",
                                              showTarget: "employment-message-6-months"
                                            },
                                            {
                                              key: "AgedOrServicePensioner",
                                              value: "Pensioner"
                                            }
                                          ]
                                        },
                                        predicate: {
                                          op: "in",
                                          path: "finances.employment",
                                          value: [
                                            "FullTime",
                                            "PartTime",
                                            "Contract",
                                            "SelfEmployed",
                                            "SoleTrader",
                                            "Retired",
                                            "CurrentlyUnemployed",
                                            "Casual",
                                            "AgedOrServicePensioner"
                                          ]
                                        },
                                        errorMessage: "Employment type is required"
                                      },
                                      {
                                        component: "rs-message",
                                        name: "employment-message-6-months",
                                        cssClass: "col-xs-12",
                                        initState: {
                                          hidden: true
                                        },
                                        config: {
                                          name: "employmentStatusMessage",
                                          content: "This employment status requires a minimum of 6 months in your current role",
                                          type: "warning",
                                          icon: "fa fa-question-circle"
                                        }
                                      },
                                      {
                                        component: "rs-message",
                                        name: "employment-message-12-months",
                                        cssClass: "col-xs-12",
                                        initState: {
                                          hidden: true
                                        },
                                        config: {
                                          name: "employmentStatusMessage",
                                          content: "This employment status requires a minimum of 12 months in your current role",
                                          type: "warning",
                                          icon: "fa fa-question-circle"
                                        }
                                      },
                                      {
                                        component: "rs-form-select",
                                        name: "numberOfDependants",
                                        appModelPath: "finances.numberOfDependants",
                                        cssClass: "col-xs-12",
                                        config: {
                                          placeholder: "Number of dependent children",
                                          name: "numberOfDependants",
                                          options: [
                                            {
                                              key: "0",
                                              value: "0"
                                            },
                                            {
                                              key: "1",
                                              value: "1"
                                            },
                                            {
                                              key: "2",
                                              value: "2"
                                            },
                                            {
                                              key: "3",
                                              value: "3"
                                            },
                                            {
                                              key: "4",
                                              value: "4"
                                            },
                                            {
                                              key: "5",
                                              value: "5"
                                            },
                                            {
                                              key: "6",
                                              value: "6"
                                            },
                                            {
                                              key: "7",
                                              value: "7"
                                            },
                                            {
                                              key: "8",
                                              value: "8"
                                            }
                                          ]
                                        },
                                        predicate: {
                                          op: "in",
                                          path: "finances.numberOfDependants",
                                          value: [
                                            "0",
                                            "1",
                                            "2",
                                            "3",
                                            "4",
                                            "5",
                                            "6",
                                            "7",
                                            "8"
                                          ]
                                        },
                                        errorMessage: "Number of dependants is required"
                                      }
                                    ]
                                  },
                                  {
                                    component: "rs-section",
                                    name: "termsAndConditions",
                                    cssClass: "terms-and-conditions",
                                    ch: [
                                      {
                                        component: "rs-form-subtitle",
                                        name: "termsAndConditionsSubtitle",
                                        index: 5,
                                        content: "Complete and submit",
                                        cssClass: "page-subtitle"
                                      },
                                      {
                                        component: "rs-form-yes-no",
                                        name: "creditReportingAgreement",
                                        appModelPath: "termsAndConditions.creditReportingAgreement",
                                        config: {
                                          content: "I authorise Plenti Pty Limited to act as my agent and contact a credit reporting body on my behalf to access my credit report.",
                                          initialValue: false
                                        },
                                        errorMessage: "This field is required",
                                        initState: {
                                          required: true
                                        }
                                      },
                                      {
                                        component: "rs-form-yes-no",
                                        name: "privacyAgreement",
                                        appModelPath: "termsAndConditions.privacyAgreement",
                                        config: {
                                          content: "I have read and agree to the <a href=\"https://www.plenti.com.au/about-us/legal/terms-and-conditions\" target=\"_blank\">Terms and Conditions</a>, and <a href=\"https://www.plenti.com.au/privacy/statement/\" target=\"_blank\">Privacy Statement and Electronic Communications Consent</a>. If I am not eligible for a RateEstimate, I agree that my personal information may be referred to a third party who may be able to assist me with a loan. Plenti may be paid a commission for this referral.",
                                          initialValue: false
                                        },
                                        errorMessage: "This field is required",
                                        initState: {
                                          required: true
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    component: "rs-form-submit",
                                    name: "formSubmitButton",
                                    initState: {
                                      hidden: false
                                    },
                                    config: {
                                      text: "Get your personalised quote",
                                      subText: "Getting a quote won't affect your credit score.",
                                      errorText: "Oops... You seem to have missed some fields. Please complete these and submit again"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            component: "rs-section",
                            name: "award-section",
                            cssClass: "award-section row center-xs",
                            ch: [
                              {
                                component: "rs-content-image",
                                name: "award-canstar",
                                cssClass: "award col-xs-2",
                                config: {
                                  alt: "Canstar Oustanding Value - Personal Loan",
                                  src: "awards/award-canstar-personal-loan.png"
                                }
                              },
                              {
                                component: "rs-content-image",
                                name: "award-canstar",
                                cssClass: "col-xs-2",
                                config: {
                                  alt: "Canstar Oustanding Value - Car Loan",
                                  src: "awards/award-canstar-car-loan.png"
                                }
                              },
                              {
                                component: "rs-content-image",
                                name: "award-finnies",
                                cssClass: "col-xs-3",
                                config: {
                                  alt: "Winner of RateCity's Gold Award Excellent Credit - Personal Loan",
                                  src: "awards/award-ratecity.png"
                                }
                              },
                              {
                                component: "rs-content-image",
                                name: "award-mozo",
                                cssClass: "col-xs-2",
                                config: {
                                  alt: "Mozo Experts Choice - Excellent Credit Personal Loan",
                                  src: "awards/award-mozo.png"
                                }
                              },
                              {
                                component: "rs-content-image",
                                name: "award-infochoice",
                                cssClass: "col-xs-2",
                                config: {
                                  alt: "Winner of InfoChoice - Personal Loan Lender",
                                  src: "awards/award-infochoice.svg"
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        component: "rs-section",
                        name: "aside-section",
                        cssClass: "re-aside hidden-md",
                        ch: [
                          {
                            component: "rs-section",
                            name: "aside-section-about-ratesetter",
                            cssClass: "divider",
                            ch: [
                              {
                                component: "rs-content-heading",
                                name: "aside-about-ratesetter-heading",
                                config: {
                                  level: 5,
                                  content: "Borrowers"
                                }
                              },
                              {
                                component: "rs-content-paragraph",
                                name: "aside-about-ratesetter-paragraph",
                                config: {
                                  content: "Plenti makes borrowing more rewarding. With flexible personal loans at competitive rates, borrowers can get ahead in life and achieve more with their money. It's fairer finance that works for everyone."
                                }
                              }
                            ]
                          },
                          {
                            component: "rs-section",
                            name: "aside-section-about-ratesetter",
                            cssClass: "divider",
                            ch: [
                              {
                                component: "rs-content-image",
                                name: "aside-product-review-winner",
                                config: {
                                  alt: "ProductReview.com.au 2019 Awards Winner",
                                  src: "awards/product-review-awards-winner.png"
                                }
                              },
                              {
                                component: "rs-content-image",
                                name: "aside-product-review-stars",
                                config: {
                                  alt: "4.8",
                                  src: "awards/product-review-stars.png"
                                }
                              },
                              {
                                component: "rs-content-paragraph",
                                name: "aside-product-review-paragraph",
                                cssClass: "small-text",
                                config: {
                                  content: "from 1,874 Reviews"
                                }
                              }
                            ]
                          },
                          {
                            component: "rs-section",
                            name: "aside-section-about-ratesetter",
                            cssClass: "divider",
                            ch: [
                              {
                                component: "rs-section",
                                name: "award",
                                cssClass: "award-section row",
                                ch: [
                                  {
                                    component: "rs-content-image",
                                    name: "award-canstar",
                                    cssClass: "award",
                                    config: {
                                      alt: "Canstar Oustanding Value - Personal Loan",
                                      src: "awards/award-canstar-personal-loan.png"
                                    }
                                  },
                                  {
                                    component: "rs-content-image",
                                    name: "award-canstar",
                                    cssClass: "award",
                                    config: {
                                      alt: "Canstar Oustanding Value - Personal Loan",
                                      src: "awards/award-canstar-car-loan.png"
                                    }
                                  }
                                ]
                              },
                              {
                                component: "rs-content-paragraph",
                                name: "aside-product-review-paragraph",
                                cssClass: "small-text",
                                config: {
                                  content: "Winner of Canstar’s Outstanding Value Personal Loan and Car Loan 2020"
                                }
                              }
                            ]
                          },
                          {
                            component: "rs-section",
                            name: "aside-section-about-ratesetter",
                            cssClass: "divider",
                            ch: [
                              {
                                component: "rs-content-image",
                                name: "award-rateCity",
                                cssClass: "award",
                                config: {
                                  alt: "Winner of RateCity's Gold Award Excellent Credit - Personal Loan",
                                  src: "awards/award-ratecity.png"
                                }
                              },
                              {
                                component: "rs-content-paragraph",
                                name: "aside-product-review-paragraph",
                                cssClass: "small-text",
                                config: {
                                  content: "Winner of RateCity's Gold Award Excellent Credit Personal Loans 2020, 2021"
                                }
                              }
                            ]
                          },
                          {
                            component: "rs-section",
                            name: "aside-section-about-ratesetter",
                            cssClass: "divider",
                            ch: [
                              {
                                component: "rs-content-image",
                                name: "award-mozo",
                                cssClass: "award",
                                config: {
                                  alt: "Mozo Experts Choice - Excellent Credit Personal Loan",
                                  src: "awards/award-mozo.png"
                                }
                              },
                              {
                                component: "rs-content-paragraph",
                                name: "aside-product-review-paragraph",
                                cssClass: "small-text",
                                config: {
                                  content: "Winner of Mozo's Unsecured Personal Loan 2019"
                                }
                              }
                            ]
                          },
                          {
                            component: "rs-section",
                            name: "aside-section-about-ratesetter",
                            cssClass: "divider",
                            ch: [
                              {
                                component: "rs-content-image",
                                name: "award-infochoice",
                                cssClass: "award",
                                config: {
                                  alt: "Winner of InfoChoice - Personal Loan Lender",
                                  src: "awards/award-infochoice.svg"
                                }
                              },
                              {
                                component: "rs-content-paragraph",
                                name: "aside-product-review-paragraph",
                                cssClass: "small-text",
                                config: {
                                  content: "Winner of InfoChoice Personal Loan Lender of the Year 2021"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                component: "rs-footer",
                name: "footer",
                  config: {
                     termsConditions: "<p>Rates and repayments indicated are estimates only and are subject to change at any time without notice.<br />Displayed loan options do not constitute an offer for credit.</p><p>The information and any advice on this website has been prepared without taking account of your objectives, financial situation or needs. Before acting upon any advice, you should consider whether it is appropriate for you. Plenti Pty Limited does not provide any assurance, guarantee or recommendation in relation to any information presented on this webpage.<br />Plenti takes your privacy seriously. All information about you is held subject to our Privacy Policy.<br />Copyright © 2020. All rights reserved.</p>"
                  }
              }
            ]
          },
          Name: "RateEstimate",
          _links: [
            {
              Rel: "",
              Href: "/uidefinition/664fa83d-ac98-411d-8b08-6540ac48733f"
            }
          ]
        });
      }));
  });
});

