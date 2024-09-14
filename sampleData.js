const classes = [
  {
    name: "Class 1",
    description: "Description of Class 1",
    units: [
      {
        title: "Unit 1",
        description: "Description of Unit 1",
        sessions: [
          {
            title: "Session 1.1",
            resources: [
              { text: "Lecture 1", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
              { text: "Lecture 2", link: "https://www.youtube.com/watch?v=htznIeWKgg8" }
            ],
            reviews: [
              {
                reviewer: "Alice",
                content: "Great session!",
                replies: [
                  {
                    reviewer: "Admin",
                    content: "Thanks for your feedback!"
                  }
                ]
              },
              {
                reviewer: "Bob",
                content: "Very informative.",
                replies: []
              }
            ]
          },
          {
            title: "Session 1.2",
            resources: [
              { text: "Lecture 3", link: "https://www.youtube.com/watch?v=htznIeWKgg8" }
            ],
            reviews: [
              {
                reviewer: "Charlie",
                content: "Good content, but could use more examples.",
                replies: []
              }
            ]
          }
        ]
      },
      {
        title: "Unit 2",
        description: "Description of Unit 2",
        sessions: [
          {
            title: "Session 2.1",
            resources: [
              { text: "Lecture 4", link: "https://www.youtube.com/watch?v=htznIeWKgg8" }
            ],
            reviews: []
          }
        ]
      }
    ]
  },
  // Add more classes as needed
];

module.exports = classes;
