import React from "react"
import renderer from "react-test-renderer"
import Accordion from "../accordion";
import RoadMapBlockContainer from "../RoadMapBlockContainer";

 const roadMapItem = {
  streamLine: {
    measure: ["Time saved", "Daily and monthly users", "% of users on mobile", "# of forms completed"],
    now: ["Intel Referral", "Events at the border", "Intel workflow", "sGMR", "Firmstep Migration*"],
    next: ["NCC Task Management", "Capacity Planning (OAR)", "RefDataV2", "Integrity Checks", "Cerberus Task Management*"],
    later: ["Record Refusal for entry (IS81)", "OAR Enhance", "Man DecV2", "Ops Planning Tools"]
  },
  inform: {
    measure: ["# reports available", "# analysts using data", "# of cases to stakeholders", "faster availability of data"],
    now: ["BI Integration", "Analyst Data (self serve)", "PRAU feed V2", "Product Page"],
    next: ["Shift Debrief", "Sit Rep View", "Mandatory Declarations Viewer", "Embedded BI dashboards in COP"],
    later: ["Service Perf Dashboard", "Ops Dashboard", "Intel Dashboard"]
  },
  trusted: {
    measure: ["Availability", "# grey IT systems removed", "Cost per transaction", "User satisfaction"],
    now: ["Image Capture (Smartphone)", "Workflow collaboration Tool (Cawemo)", "24x7 Support", "Service Readiness Review", "Secure, Run, Continuous Improve"],
    next: ["eDcoument read & verify", "Workflow Engine Upgrade 7.13", "Optimise Tool", "User Documentation V2", "Secure, Run, Continuous Improve"],
    later: ["Fingerprint capture", "Workflow Engine Upgrade 7.14", "Release Comms", "Secure, Run, Continuous Improve"]
  }
};


 const roadMapMobile = {
  streamLine: [
    {
      id: 'streamLine',
      header: "Measure",
      body: <RoadMapBlockContainer
        content={roadMapItem.streamLine.measure}
        bannerColour={"#28afb0"}/>
    },
    {
      id: 'streamLine',
      header: "Now",
      body: <RoadMapBlockContainer
        content={roadMapItem.streamLine.now}
        bannerColour={"#28afb0"}/>
    },
    {
      id: 'streamLine',
      header: "Next",
      body: <RoadMapBlockContainer
        content={roadMapItem.streamLine.next}
        bannerColour={"#28afb0"}/>
    },
    {
      id: 'streamLine',
      header: "Later",
      body: <RoadMapBlockContainer
        content={roadMapItem.streamLine.later}
        bannerColour={"#28afb0"}/>
    },
  ],
  inform: [
    {
      id: 'inform',
      header: "Measure",
      body: <RoadMapBlockContainer
        content={roadMapItem.inform.measure}
        bannerColour={"#f18f01"}/>
    },
    {
      id: 'inform',
      header: "Now",
      body: <RoadMapBlockContainer
        content={roadMapItem.inform.now}
        bannerColour={"#f18f01"}/>
    },
    {
      id: 'inform',
      header: "Next",
      body: <RoadMapBlockContainer
        content={roadMapItem.inform.next}
        bannerColour={"#f18f01"}/>
    },
    {
      id: 'inform',
      header: "Later",
      body: <RoadMapBlockContainer
        content={roadMapItem.inform.later}
        bannerColour={"#f18f01"}/>
    },
  ],
  trusted: [
    {
      id: 'trusted',
      header: "Measure",
      body: <RoadMapBlockContainer
        content={roadMapItem.trusted.measure}
        bannerColour={"#a23b72"}/>
    },
    {
      id: 'trusted',
      header: "Now",
      body: <RoadMapBlockContainer
        content={roadMapItem.trusted.now}
        bannerColour={"#a23b72"}/>
    },
    {
      id: 'trusted',
      header: "Next",
      body: <RoadMapBlockContainer
        content={roadMapItem.trusted.next}
        bannerColour={"#a23b72"}/>
    },
    {
      id: 'trusted',
      header: "Later",
      body: <RoadMapBlockContainer
        content={roadMapItem.trusted.later}
        bannerColour={"#a23b72"}/>
    },
  ],
};

describe("Accordion", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<div><Accordion content={roadMapMobile.streamLine}/> <Accordion content={roadMapMobile.inform}/> <Accordion content={roadMapMobile.trusted}/></div> )
      .toJSON();
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly in content", () => {
    const tree = renderer
      .create(<div><Accordion content={roadMapMobile.streamLine}/> <Accordion content={roadMapMobile.inform}/> <Accordion content={roadMapMobile.trusted}/></div>)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})