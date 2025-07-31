# Bytebase 登录页面克隆版

这是一个使用 Next.js 和 Tailwind CSS 构建的 Bytebase 登录页面的克隆版。它包含一个标准的邮箱/密码登录表单，并实现了一个安全可靠的 GitHub OAuth 2.0 登录流程。

## 功能特性

- 标准的邮箱和密码登录表单。
- 用于 OAuth 2.0 身份验证的 "使用 GitHub 继续" 按钮。
- 使用 Next.js API 路由在服务器端安全地处理 GitHub OAuth 流程。
- 在用户成功通过 GitHub 登录后，显示其用户名和头像。

## 本地开发指南

### 1. 克隆仓库

```bash
git clone https://github.com/Xeron2000/bytebase-login.git
cd bytebase-login
```

### 2. 安装依赖

本项目使用 `pnpm` 作为包管理器。

```bash
pnpm install
```

### 3. 设置环境变量

为了启用 GitHub 登录功能，您需要创建一个 GitHub OAuth App。

1.  前往 [GitHub 开发者设置](https://github.com/settings/developers) 并创建一个新的 OAuth App。
2.  将 **Homepage URL** (首页 URL) 设置为 `http://localhost:3000`。
3.  将 **Authorization callback URL** (授权回调 URL) 设置为 `http://localhost:3000/api/auth/github/callback`。
4.  生成一个 **Client ID** (客户端 ID) 和一个 **Client Secret** (客户端密钥)。

接下来，在项目根目录下创建一个名为 `.env.local` 的文件，并添加以下变量：

```
NEXT_PUBLIC_GITHUB_CLIENT_ID=你的_GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET=你的_GITHUB_CLIENT_SECRET
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. 运行开发服务器

```bash
pnpm dev
```

在您的浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 部署到 Vercel

本项目已为在 [Vercel](https://vercel.com/) 上部署进行了优化。

1.  **推送到 GitHub**: 将您的项目代码推送到一个 GitHub 仓库。
2.  **在 Vercel 上导入项目**: 前往您的 Vercel 仪表盘，并从您的 GitHub 仓库导入该项目。Vercel 会自动检测到这是一个 Next.js 项目。
3.  **配置环境变量**: 在您的 Vercel 项目设置中 (**Settings > Environment Variables**)，添加与您在 `.env.local` 文件中相同的三个变量：
    *   `NEXT_PUBLIC_GITHUB_CLIENT_ID`
    *   `GITHUB_CLIENT_SECRET`
    *   `NEXT_PUBLIC_API_URL` (请将其值设置为您的 Vercel 生产环境 URL, 例如, `https://your-project.vercel.app`)
4.  **更新 GitHub OAuth App**: 回到您的 GitHub OAuth App 设置页面，并将 **Authorization callback URL** 更新为您的 Vercel 生产环境 URL：`https://your-project.vercel.app/api/auth/github/callback`。
5.  **部署**: 在 Vercel 上触发一次新的部署。您的网站现已上线！
