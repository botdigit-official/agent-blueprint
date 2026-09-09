# Mobile App Example

This directory shows how Agent Blueprint applies to a mobile application.

## Archetype

A mobile application (iOS, Android, or cross-platform) with:
- Device-specific APIs (notifications, location, camera, etc.)
- Backend API or BaaS
- App store distribution
- Potentially offline functionality

## Skills Activated

### Always
- 00-orchestrator
- 01-discovery
- 05-documentation

### Conditional
- 03-business-architecture (if business logic exists)
- 04-architecture
- 06-codebase-audit
- 07-security (if user data, auth, or sensitive device data is handled)
- 08-testing

### Stack (detected)
- stacks/[language] (Swift, Kotlin, Dart, JS/TS for React Native, etc.)
- frameworks/[framework] (React Native, Flutter, or native)
- stacks/[backend] (if a backend API exists)

## Minimum Documentation

Tier 2 or 3 depending on complexity. Mobile apps with backends and user data need Tier 3.

