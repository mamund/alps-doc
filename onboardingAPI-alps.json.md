# On-Boarding API


ALPS Profile for BigCo's Customer On-Boarding API

## Properties


The following data properties are defined for this API.


 - **identifier** : Unique onboarding record identifier.
 - **name** : Name of the customer being onboarded.
 - **email** : Email address of the customer being onboarded.
 - **region** : Sales region where the customer is located.
 - **discount** : Discount (as a percentage) this customer is granted.

## Actions


The following actions, or state transitions, are defined for this API.

id | type | rt | args | notes
--- | --- | --- | --- | ---
**startOnboarding | safe | na | na | 
**collectCustomerData | safe | na | na | 
**saveToWIP | unsafe | na | na | 
**collectAccountData | safe | na | na | 
**saveToWIP | unsafe | na | na | 
**completeOnboarding | unsafe | na | na | 
**goHome | safe | na | na | 
**abandonOnboarding | unsafe | na | na | 

## States


The following states (e.g. REST Resources) are defined for this API.


TK
