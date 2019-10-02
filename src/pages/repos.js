import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"
import { Pie } from "react-chartjs-2"
import GitHubRepo from "../components/GitHubRepo"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

const languagesConstnts = {
  JAVASCRIPT: "JavaScript",
  CSS: "CSS",
  HTML: "HTML",
  CSharp: "C#",
}

const ReposPage = () => {
  const [githubRepos, getGithubRepos] = useState([])
  const [activeRepo, setActiveRepo] = useState({})

  useEffect(() => {
    axios
      .get("https://api.github.com/users/themicrosoftman/repos?sort=updated")
      .then(data => {
        getGithubRepos(
          data.data.map(repo => {
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
            }
          })
        )
      })
      .catch(err => console.log(err))
  }, [])

  const getRepoInfo = repo_id => {
    axios
      .get(`https://api.github.com/repos/themicrosoftman/${repo_id}`)
      .then(async data => {
        const reposLanguages = await getReposLanguages(repo_id)
        const reposCommits = await getReposCommits(repo_id)

        const reposLanguagesArr = []
        for (let lang in reposLanguages.data) {
          reposLanguagesArr.push({
            name: lang,
            bytes: reposLanguages.data[lang],
          })
        }

        let bytesSum = 0
        reposLanguagesArr.forEach(lang => {
          bytesSum += lang.bytes
        })

        const reposLanguagesDetailArr = reposLanguagesArr.map(lang => {
          return {
            name: lang.name,
            bytes: lang.bytes,
            percent: Math.round((lang.bytes * 100) / bytesSum),
          }
        })

        setActiveRepo({
          full_name: data.data.full_name,
          description: data.data.description,
          html_url: data.data.html_url,
          language: data.data.language,
          created_at: data.data.created_at,
          updated_at: data.data.updated_at,
          reposLanguages: reposLanguagesDetailArr,
          reposCommits: reposCommits.data.map(commit => {
            return {
              message: commit.commit.message,
              date: commit.commit.author.date,
            }
          }),
        })
      })
      .catch(err => console.log(err))
  }

  const getReposLanguages = repo_id => {
    return axios.get(
      `https://api.github.com/repos/themicrosoftman/${repo_id}/languages`
    )
  }

  const getReposCommits = repo_id => {
    return axios.get(
      `https://api.github.com/repos/themicrosoftman/${repo_id}/commits`
    )
  }

  return (
    <Layout>
      <SEO title="Repos" />
      <div className="page github">
        {/* <h2>GitHub repositories</h2> */}
        <div className="PostsList">
          {githubRepos &&
            githubRepos.map((repo, index) => {
              return (
                <span
                  key={repo.id}
                  to={repo.html_url}
                  className="post-link"
                  onClick={() => getRepoInfo(repo.name)}
                >
                  {index + 1}. {repo.name}
                </span>
              )
            })}
        </div>

        {activeRepo.hasOwnProperty("full_name") && (
          <div className="repo_info">
            <a
              href={activeRepo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo_info_name"
            >
              {activeRepo.full_name}
            </a>
            <div className="repo_info_text">
              <p className="repo_info_text_desc">{activeRepo.description}</p>
            </div>
            <div className="repo_info_languages">
              <details>
                <summary>
                  <span className="repo_info_languages_title">
                    Languages list
                  </span>
                </summary>
                <ul className="repo_info_languages-list">
                  {activeRepo.reposLanguages.map((lang, index) => {
                    return (
                      <li key={index} className="repo_info_languages-list_item">
                        <span className="repo_info_languages-list_item_name">
                          {lang.name}:
                        </span>
                        <span className="repo_info_languages-list_item_size">
                          {lang.bytes} bytes
                        </span>
                        -
                        <span className="repo_info_languages-list_item_percent">
                          {lang.percent}%
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </details>
            </div>
            <div className="repo_info_commits">
              <details>
                <summary>
                  <span className="repo_info_commits_title">Commits list</span>
                </summary>
                <ul className="repo_info_commits-list">
                  {activeRepo.reposCommits.map((commit, index) => {
                    return (
                      <li key={index} className="repo_info_commits-list_item">
                        <span className="repo_info_commits-list_item_date">
                          {moment(commit.date).format("DD.MM.YYYY HH:mm:ss")}
                        </span>
                        :
                        <span className="repo_info_commits-list_item_msg">
                          {commit.message}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </details>
            </div>
            <div className="repo_info_chart">
              <Pie
                data={{
                  labels: activeRepo.reposLanguages.map(lang => {
                    return lang.name
                  }),
                  datasets: [
                    {
                      data: activeRepo.reposLanguages.map(lang => {
                        return lang.percent
                      }),
                      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    },
                  ],
                }}
                options={{ legend: { position: "bottom" } }}
              />
            </div>
            <div className="repo_info_text">
              <span className="repo_info_text_label">Created at: </span>
              <span className="repo_info_text_value">
                {moment(activeRepo.created_at).format("DD.MM.YYYY HH:mm:ss")}
              </span>
            </div>
            <div className="repo_info_text">
              <span className="repo_info_text_label">Updated at: </span>
              <span className="repo_info_text_value">
                {moment(activeRepo.updated_at).format("DD.MM.YYYY HH:mm:ss")}
              </span>
            </div>
          </div>
        )}
        {githubRepos &&
          githubRepos.length > 0 &&
          !activeRepo.hasOwnProperty("full_name") && (
            <div className="repos">
              {githubRepos.map((repo, index) => {
                return <GitHubRepo key={index} id={index + 1} repo={repo} />
              })}
            </div>
          )}
      </div>
    </Layout>
  )
}

export default ReposPage
