exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C4%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22releases/1.2%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22releases/1.2%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22jdoe/FLEXSDK-123%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22jdoe/FLEXSDK-123%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%27%22%7D%7D%2C%22tags%22%3A%7B%221.2-rc1%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%221.2-rc1%22%7D%2C%22internal-release-1.2-rc1%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%22internal-release-1.2-rc1%22%7D%2C%22public-release-1.2-rc1%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%22public-release-1.2-rc1%22%7D%2C%221.2.1-rc1%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%221.2.1-rc1%22%7D%2C%22internal-release-1.2.1-rc1%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22internal-release-1.2.1-rc1%22%7D%2C%22public-release-1.2.1-rc1%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22public-release-1.2.1-rc1%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22releases/1.2%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git commit;git commit;git commit;git branch jdoe/FLEXSDK-123 releases/1.2;git checkout jdoe/FLEXSDK-123;git cherry-pick c3;git checkout releases/1.2;git merge jdoe/FLEXSDK-123;git tag 1.2.1-rc1 releases/1.2;git tag internal-release-1.2.1-rc1 releases/1.2;git tag public-release-1.2.1-rc1 releases/1.2",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"releases/1.2\":{\"target\":\"C1\",\"id\":\"releases/1.2\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"tags\":{\"1.2-rc1\":{\"target\":\"C1\",\"id\":\"1.2-rc1\"},\"internal-release-1.2-rc1\":{\"target\":\"C1\",\"id\":\"internal-release-1.2-rc1\"},\"public-release-1.2-rc1\":{\"target\":\"C1\",\"id\":\"public-release-1.2-rc1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Public Patch Release"
  },
  "hint": {
    "en_US": ""
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Public Patch Release",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "## Steps",
              "",
              "Press the green button below to see how it should work.",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              "",
              "",
              "",
              ""
            ],
            "command": "git commit;\ngit commit;\ngit commit;\ngit branch jdoe/FLEXSDK-123 releases/1.2;\ngit co jdoe/FLEXSDK-123;\ngit cherry-pick c3;\ngit co releases/1.2;\ngit merge jdoe/FLEXSDK-123;\ngit tag 1.2.1-rc1 releases/1.2;\ngit tag internal-release-1.2.1-rc1 releases/1.2;\ngit tag public-release-1.2.1-rc1 releases/1.2;",
            "beforeCommand": "git tag 1.2-rc1 master;\ngit branch releases/1.2 1.2-rc1;\ngit tag internal-release-1.2-rc1 releases/1.2;\ngit tag public-release-1.2-rc1 releases/1.2;"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Now you can try it yourself",
              "",
              "",
              ""
            ]
          }
        }
      ]
    }
  }
};
