# PepperHQ Backend (Full Stack) Developer Challenge

## TL;DR
* The coding challenge is the first stage of our interview process at Pepper
* Instructions on how to complete: [Instructions](#instructions)
* The challenge we want you to complete: [Challenge](#challenge)
* Estimated time to complete: **2 hours**
* No need to do the challenge if you already have written similar code: email us a link to that repo instead

## Introduction

In our opinion, a whiteboard test assessed by interviewers looking over your shoulder is an unrealistic way to measure how developers actually work on a day-to-day basis. Instead, we have tried to produce a challenge that represents a simplified version of some of the work that we do at Pepper.  This is a way for candidates to demonstrate their abilities to us if they don't have any freely accessible code examples already. If you already have easily accessible examples that you think demonstrate your abilities, then feel free to send us an email and we can use them instead. 

After you have completed the coding challenge, one of our developers will review it. If this is positive, we will invite you to the next stage of the process.  As part of that stage,  we will review your challenge solution with you and have a general technical discussion about it.

We are always open to improving on our interview process so please email us if you have any feedback.


## [Instructions](#instructions)

* Copy or fork this github template into a new repo
* Complete the coding [Challenge](#challenge)
* Invite the user "PepperhqDevChallenge" to the repository.

## [Challenge](#challenge)

When a user starts the ordering journey in a Pepper App, they are presented with a menu to select food & drinks from.

Menus are retrieved from a 3rd party such as a merchant's point of sales system. In some cases, a menu from the 3rd party won't map directly to our menu schema so we will need to extend it with extra information such as human-readable titles before showing it to the user. Also, some of these 3rd parties also have rate limited APIs, so we need to implement caching to avoid hitting these limits.

We would like you to build a REST api service with a singular endpoint `/menu` that:
* Fetches the menu from our fake point of sale service: `http://backend-challenge-pos.pepperhq.com/menu.json`
* Extends the products in the menu with the list of human-readable titles from `titles.json`
* Caches the menu with a 24 hour expiration policy
* Returns the extended menu as json with a 200 OK status code

We would prefer you to use `Node.js` and `TypeScript` as that's what we use, but you can use other tech / languages if you prefer.

Source: [https://github.com/PepperHQ/backend-challenge](https://github.com/PepperHQ/backend-challenge)