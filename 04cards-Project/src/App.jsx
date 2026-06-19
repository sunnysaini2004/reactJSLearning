import React from "react";
import Card from "./components/cards";
import User from "./components/user";
const App = () => {
  const jobsOpenings = [
    {
      brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?_=20210729021049",
      companyName: "Microsoft",
      datePosted: "1 day ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$130/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG10.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaR3qttIV4m9ge87zuVVFM9tAqFHw2QmSPFQ&s",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$180/hour",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/042/165/794/non_2x/netflix-logo-transparent-background-free-png.png",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Product Designer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$170/hour",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "Today",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$190/hour",
      location: "Santa Clara, USA",
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png",
      companyName: "Tesla",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$160/hour",
      location: "Austin, USA",
    },
    {
      brandLogo: "https://i.pinimg.com/736x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg",
      companyName: "LinkedIn",
      datePosted: "2 days ago",
      post: "UI Designer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$110/hour",
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JPvedCBmNG39bU4Zvq1PJTRRl6Nc8OOimA&s",
      companyName: "Uber",
      datePosted: "6 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$145/hour",
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      {jobsOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              brandLogo={elem.brandLogo}
              pay={elem.pay}
              loc={elem.location}
              date={elem.datePosted}
            />
            ;
          </div>
        );
      })}
    </div>
  );
};

export default App;
