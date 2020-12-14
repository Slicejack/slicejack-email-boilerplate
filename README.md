![Bojler Heading](https://bojler.slicejack.com/wp-content/uploads/2018/09/bojler-title-2.png "Bojler")

[![GitHub release](https://img.shields.io/github/release/slicejack/bojler.svg)](https://github.com/Slicejack/bojler/releases)
[![Travis](https://travis-ci.org/Slicejack/bojler.svg?branch=master)](https://travis-ci.org/Slicejack/bojler)
[![Github All Releases](https://img.shields.io/github/downloads/slicejack/bojler/total.svg)](https://github.com/Slicejack/bojler/releases)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/slicejack/bojler.svg)
[![GitHub issues](https://img.shields.io/github/issues-raw/slicejack/bojler.svg)](https://github.com/Slicejack/bojler/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/slicejack/bojler.svg)](https://github.com/Slicejack/bojler/issues)
[![license](https://img.shields.io/github/license/slicejack/bojler.svg)](https://github.com/Slicejack/bojler/blob/master/LICENSE)

## What is Bojler ?
Bojler is an email framework for developing responsive and lightweight email templates that will render correctly across each of the most popular email clients.

If you have experience with email template development, you know how painful it is to build a perfect email template that works across all email clients.

To make it easier for you to develop responsive and lightweight email templates we have created Bojler.

## Project documentation 📖
Full project documentation can be found at https://bojler.slicejack.com/.

## Quick-start guide 🚀
Full getting started guide can be found [here](https://bojler.slicejack.com/documentation/getting-started/).

### 1. Download
- [Download source files](https://github.com/Slicejack/bojler/archive/v4.1.6.zip) or
- Clone the repo: `git clone https://github.com/Slicejack/bojler.git`

### 2. Install node packages: `npm install`
Secondly, install node packages in root of your newly downloaded folder with `npm install` command.
> [This is an example](https://asciinema.org/a/Y0F4uVLb8agcPQKUGZ1CXFDPZ) of what you should get after you run `npm install` command.

### 3. Start development server: `npm start`
Let's fire up our development server 🔥

Run `npm start` in your project root folder.

While your development server is running, every time you make and save changes they will be automatically compiled from `src/` to `dist/` folder.
> [This is an example](https://asciinema.org/a/dtwO6MMKRYvTxFIOhVllHGxEK) of what you should get after you run `npm start` command and save some changes while your development server is running.

### 4. Project configuration and files editing
You’re ready to edit bojler configuration file in `src/sass/_settings.scss`.

You can take a deeper look at [documentation section](https://bojler.slicejack.com/documentation) where we examine variables and maps more carefully.

Now, you can start adding HTML templates to `src/templates` folder.

In `/templates` folder you can find `boilerplate.html` and `boilerplate-with-hero.html` which you can use as starting point for new templates.

## Available NPM commands
<table>
	<thead>
		<tr>
			<th width="170">Command</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>npm start</code></td>
			<td>This command starts live development server and watch task. While your development server is running, every time you make and save changes they will be automatically compiled from <code>src/</code> to <code>dist/</code> folder. Take a look at example <a href="https://asciinema.org/a/dtwO6MMKRYvTxFIOhVllHGxEK" rel="noopener" target="_blank">here</a>.</td>
		</tr>
		<tr>
			<td><code>npm run build</code></td>
			<td>This command builds everything from <code>src/</code> to <code>dist/</code> folder. Take a look at example <a href="https://asciinema.org/a/ueyKU3Q2Z1UNqFDNiqLqFNSXn" rel="noopener" target="_blank">here</a>.</td>
		</tr>
		<tr>
			<td><code>npm run assets</code></td>
			<td>This command copies all the assets from <code>src/assets/</code> to <code>dist/assets/</code> folder. You have to run this command every time you add a new asset in order to see changes. Take a look at example <a href="https://asciinema.org/a/k0aS881EUNes4GaBhGeVMjuYE" rel="noopener" target="_blank">here</a>.</td>
		</tr>
	</tbody>
</table>

## Features
Quick features overview:
- It’s responsive 🖥️ 💻 📱
- Built with SASS 🎉
- Automated SASS to CSS transpiler 🔢 🔀 🔠
- Automated SASS linter (With email development rules) 🖌️
- Automated CSS inlining 🔢 🔀 📦
- Webserver with live reload 🔃
- Default boilerplate template included
- Reset styles
- Typography ✍️
- Grid system
- Utility classes 🛠️
- Components

## Bugs and feature requests 🕷️
If you find a bug or need new feature please open a [new issue](https://github.com/Slicejack/bojler/issues) and we will discuss about it.

## How to contribute ? 🛠️
You can review the [guidelines for contributing](https://github.com/Slicejack/bojler/blob/master/CONTRIBUTING.md) to this repository [here](https://github.com/Slicejack/bojler/blob/master/CONTRIBUTING.md).

## Change Log
All notable changes to this project will be documented in [CHANGELOG file](https://github.com/Slicejack/bojler/blob/master/CHANGELOG.md).

## Credits
Special thanks to:
- Ian Hoar
- [Sean Powell](https://github.com/seanpowell/Email-Boilerplate)
- [James White](https://blog.jmwhite.co.uk)
- [Campaign Monitor](https://www.campaignmonitor.com/)
- [MailChimp](http://www.mailchimp.com/)
- [Email on Acid](https://www.emailonacid.com)
- [Litmus](http://litmus.com)
- [Bringinteraktiv](http://removebluelinks.com)
- [Zurb Foundation](http://foundation.zurb.com/emails.html)

## License
All contents of this boilerplate are licensed under the [MIT license](https://github.com/Slicejack/bojler/blob/master/LICENSE.md).
