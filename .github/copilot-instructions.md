# Project Guidelines

## Language
- このリポジトリでの応答、提案、PR説明、コードレビューコメントは日本語で行う。
- 特に PR 本文、レビュー指摘、レビュー返信は日本語を必須とする。
- 日本語の語調は [.github/instructions/genius-tone.instructions.md](.github/instructions/genius-tone.instructions.md) に従う。

## Project Context
- 現状は最小構成のリポジトリで、主要ファイルは [README.md](README.md) が中心。
- 開発環境は [ .devcontainer/devcontainer.json ](.devcontainer/devcontainer.json) を基準とする。
- Node.js は devcontainer の設定に合わせて 22 系を前提にする。

## Build and Test
- devcontainer 初期化時に `npm ci` が実行される前提で進める。
- 開発サーバーは Astro の標準に合わせて 4321 番ポートを使用する。
- package.json が存在しない場合は、コマンド実行前に不足を明示してからセットアップ案を提示する。

## Conventions
- 変更提案は小さく分割し、目的・影響・確認方法を日本語で簡潔に示す。
- 不明点は推測で断定せず、確認事項として明示する。
- 既存ドキュメントがある場合は内容を重複記載せず、リンクで参照する。
