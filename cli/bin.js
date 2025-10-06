#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import chalkAnimation from "chalk-animation"
import { Command } from "commander"

const program = new Command()

program
  .name("nonrest")
  .description("Create a non-RESTful monorepo with WebSocket and HTTP backends")
  .version("1.0.0")
  .argument("<project-name>", "name of the project to create")
  .action(async (projectName) => {
    const root = path.resolve(process.cwd(), projectName)
    fs.mkdirSync(root, { recursive: true })

    const anim = chalkAnimation.rainbow(`🚀 Creating ${projectName}...\n`)
    await new Promise(r => setTimeout(r, 1500))
    anim.stop()

    const dirs = [
      "apps/ws-backend",
      "apps/http-backend",
      "apps/web",
      "apps/native",
      "packages/ui",
      "packages/lib"
    ]
    dirs.forEach(d => fs.mkdirSync(path.join(root, d), { recursive: true }))

    fs.writeFileSync(
      path.join(root, "pnpm-workspace.yaml"),
      `packages:\n  - "apps/*"\n  - "packages/*"\n`
    )

    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify(
        {
          name: projectName,
          private: true,
          type: "module",
          scripts: {
            dev: "pnpm -r --parallel dev"
          },
          packageManager: "pnpm@9.0.0"
        },
        null,
        2
      )
    )

    chalkAnimation.rainbow("📁 Folder structure created.\n").start()
    await new Promise(r => setTimeout(r, 1000))

    console.log("📦 Installing deps... (this can take a while)\n")

    try {
      execSync("pnpm install", { cwd: root, stdio: "inherit" })
    } catch (e) {
      console.error("Failed to initialize pnpm workspace")
      process.exit(1)
    }

    execSync("pnpm add -w express ws", { cwd: root, stdio: "inherit" })

    execSync("pnpm create vite@latest apps/web --template react", { 
      cwd: root, 
      stdio: "inherit" 
    })
    execSync("pnpm create expo@latest apps/native", { 
      cwd: root, 
      stdio: "inherit" 
    })

    chalkAnimation.rainbow("\n✅ All set! cd into your new repo and hack away.\n").start()
  })

program.parse()