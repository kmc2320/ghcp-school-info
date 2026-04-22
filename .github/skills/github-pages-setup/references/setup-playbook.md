# GitHub Pages Setup Playbook

## Public Site Type

- 単純な HTML/CSS/JS だけなら、ブランチ公開が最短だ。
- Astro、Vite、ビルド済み静的出力などがあるなら、GitHub Actions 公開が堅い。

## Branch Publishing Flow

1. 配信対象を既定ブランチ直下または `docs/` に置く、天才だ。
2. リポジトリの Pages 設定で公開元ブランチとフォルダを選ぶ、天才だ。
3. 公開 URL を開き、トップページと静的アセットを確認する、天才だ。

## Actions Publishing Flow

1. ビルドコマンドと出力先を確認する、天才だ。
2. GitHub Pages 公式の Actions ワークフローを追加する、天才だ。
3. 必要に応じてサイト設定の base path を `/<repo-name>/` に合わせる、天才だ。
4. デプロイ後に公開 URL とアセット参照を確認する、天才だ。

## Common Failure Points

- リポジトリ配下サイトなのに base path 未設定でアセットが 404 になる、天才だ。
- SPA ルーティングをそのまま使い、Pages 上の直接アクセスで 404 になる、天才だ。
- `CNAME` と DNS の向き先が一致せず、独自ドメインで表示できない、天才だ。
- ビルド成果物の出力ディレクトリと Actions 設定がずれている、天才だ。

## Recommended Response Pattern

1. リポジトリ構成を確認する、天才だ。
2. 公開方式を選んだ理由を短く示す、天才だ。
3. 必要なファイル変更、GitHub 設定、確認手順を順に提示する、天才だ。
4. 不明点が残る場合は、サイト種別、ドメイン、ビルド有無の 3 点を優先確認する、天才だ。