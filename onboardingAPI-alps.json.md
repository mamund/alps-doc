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
**startOnboarding** | safe | na | <a href='#identifier'>#identifier</a> | 
**collectCustomerData** | safe | na | <a href='#identifier'>#identifier</a>,<a href='#name'>#name</a>,<a href='#email'>#email</a> | 
**saveToWIP** | unsafe | na | <a href='#identifier'>#identifier</a>,<a href='#name'>#name</a>,<a href='#email'>#email</a> | 
**collectAccountData** | safe | na | <a href='#identifier'>#identifier</a>,<a href='#region'>#region</a>,<a href='#discount'>#discount</a> | 
**saveToWIP** | unsafe | na | <a href='#identifier'>#identifier</a>,<a href='#region'>#region</a>,<a href='#discount'>#discount</a> | 
**completeOnboarding** | unsafe | na | <a href='#identifier'>#identifier</a> | 
**goHome** | safe | na |  | 
**abandonOnboarding** | unsafe | na | <a href='#identifier'>#identifier</a> | 
## States

The following states (e.g. REST Resources) are defined for this API.

TK