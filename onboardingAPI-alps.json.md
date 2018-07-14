# On-Boarding API

ALPS Profile for BigCo's Customer On-Boarding API
## Properties

The following data properties are defined for this API.


#### identifier

_Unique onboarding record identifier._
#### name

_Name of the customer being onboarded._
#### email

_Email address of the customer being onboarded._
#### region

_Sales region where the customer is located._
#### discount

_Discount (as a percentage) this customer is granted._
## Actions

The following actions, or state transitions, are defined for this API.


id | type | rt | args | notes
--- | --- | --- | --- | ---
**startOnboarding** | safe | na | #identifier | [link](http://amundsen.com/)
**collectCustomerData** | safe | na | #identifier,#name,#email | [link](http://amundsen.com/)
**saveToWIP** | unsafe | na | #identifier,#name,#email | [link](http://amundsen.com/)
**collectAccountData** | safe | na | #identifier,#region,#discount | [link](http://amundsen.com/)
**saveToWIP** | unsafe | na | #identifier,#region,#discount | [link](http://amundsen.com/)
**completeOnboarding** | unsafe | na | #identifier | [link](http://amundsen.com/)
**goHome** | safe | na |  | [link](http://amundsen.com/)
**abandonOnboarding** | unsafe | na | #identifier | [link](http://amundsen.com/)
## States

The following states (e.g. REST Resources) are defined for this API.

TK