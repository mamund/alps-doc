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


 - **startOnboarding**
 - **collectCustomerData**
 - **saveToWIP**
 - **collectAccountData**
 - **saveToWIP**
 - **completeOnboarding**
 - **goHome**
 - **abandonOnboarding**

id | type
--- | ---
**startOnboarding**
safe | **collectCustomerData**
safe | **saveToWIP**
unsafe | **collectAccountData**
safe | **saveToWIP**
unsafe | **completeOnboarding**
unsafe | **goHome**
safe | **abandonOnboarding**
unsafe

## States


The following states (e.g. REST Resources) are defined for this API.


TK
