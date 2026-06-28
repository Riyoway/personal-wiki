---
title: New machine setup
description: Quick checklist for a fresh machine.
---

Initial setup steps for a new machine.

```sh
# Node via nvm
nvm install --lts

# Git basics
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# SSH key
ssh-keygen -t ed25519 -C "you@example.com"
```

- Sign in to the password manager.
- Sync editor settings.
- Restore dotfiles.
