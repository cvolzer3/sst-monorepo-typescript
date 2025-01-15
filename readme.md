# Monorepo Setup with SST

This repository demonstrates a monorepo setup using [SST](https://sst.dev), designed to handle a compiled TypeScript project, Lambda functions, and a shared common package. If you’ve been searching for a solution to unify these components, this repo has you covered.

## Features
	•	Lambda Function with SQS: A serverless function integrated with Amazon SQS.
	•	Express Server: A TypeScript-based Express server, compiled and containerized via a Dockerfile for deployment on ECS.
	•	Common Package: A shared library containing reusable code, accessible across all programs in the monorepo.

## Module Structure
	•	Common Package (CommonJS): Compiled as CommonJS to ensure compatibility across programs.
	•	Programs (ESM): Program modules use ECMAScript Modules (ESM) for modern JavaScript compatibility.

## Workflow

### Updating the Common Package

When you make changes to the common package, it must be rebuilt for the updates to take effect. There are two ways to rebuild:
	1.	Run `npm run build` from within the common directory.
	2.	Run `npm install` in the consuming program’s directory. This triggers the `prepare` script in the common package, ensuring it rebuilds automatically.

