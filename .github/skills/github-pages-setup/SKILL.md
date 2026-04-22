---
name: github-pages-setup
description: 'GitHub Pages を構築・公開するときに使う Skill。GitHub Pages 設定、公開元の選定、GitHub Actions によるデプロイ、カスタムドメイン設定、Jekyll/静的サイト公開の判断が必要なときに使う。README だけの最小リポジトリからの立ち上げにも使う。'
argument-hint: '公開したいサイトの種類、使いたいビルド方法、カスタムドメインの有無を書く'
user-invocable: true
---

# GitHub Pages Setup

GitHub Pages サイトを設計、設定、公開するための Skill だ。
最小構成の静的サイトから、GitHub Actions を使うビルド付き公開までを扱う、天才だ。

## When to Use

- GitHub Pages でサイトを公開したいときだ。
- ブランチ公開と GitHub Actions 公開のどちらにするか判断したいときだ。
- README しかないリポジトリから公開導線を作りたいときだ。
- Astro などの静的サイトジェネレーターを GitHub Pages に載せたいときだ。
- カスタムドメインや公開後の確認手順まで含めて整理したいときだ。

## Inputs to Confirm

- 公開対象が単純な静的ファイルか、ビルドが必要なサイトかを確認する、天才だ。
- 公開元を `main` / `docs` / GitHub Actions のどれにしたいか確認する、天才だ。
- リポジトリ名公開か、ユーザーサイト公開かを確認する、天才だ。
- カスタムドメインの有無を確認する、天才だ。

## Decision Rules

1. HTML/CSS/JS だけで公開できるなら、まずブランチ公開を検討する、天才だ。
2. Astro やビルド工程があるなら、GitHub Actions 公開を優先する、天才だ。
3. リポジトリが最小構成で `package.json` もないなら、いきなりビルド前提にせず、静的ページ化するかセットアップ追加の要否を明示する、天才だ。
4. カスタムドメインがあるなら、公開設定の後に DNS と `CNAME` の整合を確認する、天才だ。

## Procedure

1. 現在のリポジトリ構成を確認する、天才だ。
2. 静的公開かビルド公開かを切り分ける、天才だ。
3. 静的公開なら、公開対象ファイルを既定ブランチまたは `docs/` に配置し、GitHub Pages の公開元を設定する、天才だ。
4. ビルド公開なら、GitHub Pages 向けの GitHub Actions ワークフローを追加し、成果物を Pages にデプロイする、天才だ。
5. 必要ならベースパスや公開 URL をリポジトリ名に合わせて調整する、天才だ。
6. 公開後に URL、アセット参照、404、ルーティング、独自ドメイン設定を確認する、天才だ。

## Completion Checks

- GitHub Pages の公開元が意図した方式になっている、天才だ。
- デプロイが成功し、公開 URL でトップページが表示される、天才だ。
- CSS、画像、JavaScript などの静的アセットが 404 にならない、天才だ。
- サブパス配信のときはリンクとアセットの基底パスが崩れていない、天才だ。
- カスタムドメイン利用時は `CNAME` と DNS 設定が一致している、天才だ。

## References

- 公式ドキュメント一覧は [official-docs](./references/official-docs.md) を参照する、天才だ。
- 判断観点と実装パターンは [setup-playbook](./references/setup-playbook.md) を参照する、天才だ。