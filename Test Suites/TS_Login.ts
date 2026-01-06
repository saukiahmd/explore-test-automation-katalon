<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS_Login</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>10</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>b1e505d3-a238-4e59-bd06-b04e0cf7d232</testSuiteGuid>
   <testCaseLink>
      <guid>17b99de1-a188-45f2-ab6d-c75018efb6be</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login/TC_Login_001_Successful_Login_With_Standard_User</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>3d6cfa2e-1e90-4cd6-b1b9-d2797d16c3bc</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/LoginData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>3d6cfa2e-1e90-4cd6-b1b9-d2797d16c3bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>32bcfdd2-1211-41ae-bbfe-718c7c9569f5</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3d6cfa2e-1e90-4cd6-b1b9-d2797d16c3bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>29c8bc76-8f29-4fd7-b52d-7fde8b33d19b</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>ca209a7a-a01c-40ee-bcf9-f1cd17063f8c</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login/TC_Login_002_Login_With_Locked_Out_User</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>62649036-c300-4dc0-a50a-9d0b053e0ad3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login/TC_Login_003_Login_With_Invalid_Password</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>143a18f0-be31-422f-b677-23b57f6bd0aa</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login/TC_Login_004_Login_With_Invalid_Username</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>297ab150-0618-4778-918f-e77b85388e51</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login/TC_Login_005_Login_With_Empty_Username_And_Empty_Password</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>bf68ecbc-e785-4658-88e0-dfd2972deea1</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login/TC_Login_006_Login_With_Empty_Password_Only</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>cc22c1e1-7d66-4d4b-b205-5182ed3242b3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/login/TC_Login_007_Login_With_Empty_Username_Only</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
