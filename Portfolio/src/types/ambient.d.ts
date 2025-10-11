export {}

declare global {
  // Global type so it can be used without import where value name collides
  type Certifications = import('./index').Achievement
}
