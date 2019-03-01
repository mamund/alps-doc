# Weather API


ALPS Profile for BigCo's Weather API

## Properties


The following data properties are defined for this API.



#### id


_Weather condition id._

#### icon


_Weather icon id._

#### dt


_Date/Time of condition calculation._

#### name


_City name._

#### clouds


_Cloudiness in percentage._

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
