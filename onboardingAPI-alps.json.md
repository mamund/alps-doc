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
**byCityName** | safe | na | <a href='#name'>#name</a> | 
**byCityID** | safe | na | <a href='#'>#cid</a> | 
**ByGeo** | safe | na | <a href='#identifier'>#lat</a>,<a href='#name'>#long</a> | 
**byCityZIP** | safe | na | <a href='#identifier'>#zipCode</a>| 
**goHome** | safe| na | na | 
**UpdateConditions** | unsafe | na | <a href='#identifier'>#condition-object</a> | 
**RemoveConditions** | unsafe | na | <a href='#identifier'>#id</a> | 

## States


The following states (e.g. REST Resources) are defined for this API.


TK
