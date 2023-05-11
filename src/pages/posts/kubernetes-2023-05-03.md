---
title: Week of 2023-05-03 in kubernetes
pubDate: 2023-05-10
description: 'A weekly recap of what happened in the kubernetes organization on GitHub, covering Issues, Pull Requests, and Discussions in all active repos.'
author: 'Tierney Cyren'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png' 
    alt: 'The full Astro logo.'
tags: ["kubernetes", "kubernetes", "cloud", "containers", "infrastructure"] 
---

# Retrospective for `kubernetes` from 2023-05-03 to 2023-05-10

Reporting on 22 Issues from 19 authors, 78 Pull Requests from 59 authors, and 1 Discussions from 1 authors.


### minikube

#### Open Issues

- Frequent test failures of `TestStartStop/group/default-k8s-diff-port/serial/Stop` ([#16484](https://github.com/kubernetes/minikube/issues/16484))
- Frequent test failures of `TestStartStop/group/default-k8s-diff-port/serial/EnableAddonAfterStop` ([#16483](https://github.com/kubernetes/minikube/issues/16483))

#### Merged Pull Requests

- CI: include all environments in flake comments ([#16482](https://github.com/kubernetes/minikube/pull/16482))
- CI: fix kube-cross registry ([#16479](https://github.com/kubernetes/minikube/pull/16479))
- CI: Update gh from 2.28.0 to 2.29.0 ([#16477](https://github.com/kubernetes/minikube/pull/16477))

#### Closed Issues

- `kube-cross` image not working with Go 1.20.4 ([#16478](https://github.com/kubernetes/minikube/issues/16478))

#### Closed Pull Requests

- Update go from 1.20.3 to 1.20.4 ([#16481](https://github.com/kubernetes/minikube/pull/16481))

### ingress-nginx

#### Open Issues

- Upgrade NGINX Binary from 1.21.6 ([#9945](https://github.com/kubernetes/ingress-nginx/issues/9945))
- Default-backend is ignored by canary ingress ([#9944](https://github.com/kubernetes/ingress-nginx/issues/9944))
- tcp-services configMap add one configuration ， Other services that are accessed through tcp cannot be accessed properly ([#9943](https://github.com/kubernetes/ingress-nginx/issues/9943))

#### Open Pull Requests

- Use dl.k8s.io instead of kubernetes-release bucket ([#9946](https://github.com/kubernetes/ingress-nginx/pull/9946))

### website

#### Open Issues

- replace all references to https://storage.googleapis.com/kubernetes-release with https://dl.k8s.io ([#41069](https://github.com/kubernetes/website/issues/41069))
- Update Internal Load Balancer annotation for GCP in accordance with Google Cloud Kubernetes Engine doc ([#41067](https://github.com/kubernetes/website/issues/41067))
- Document conditions as a Kubernetes concept ([#41065](https://github.com/kubernetes/website/issues/41065))
- [es] Replace deprecated `fullversion` shortcode on Spanish localized docs ([#41063](https://github.com/kubernetes/website/issues/41063))
- Register and document label key `policy.kubernetes.io/engine` ([#41062](https://github.com/kubernetes/website/issues/41062))

#### Open Pull Requests

- [ko] Update outdated korean contents in dev-1.26-ko.1 (M156-157) ([#41066](https://github.com/kubernetes/website/pull/41066))
- [es] Replace use of deprecated fullversion param ([#41064](https://github.com/kubernetes/website/pull/41064))
- clarify the pods scheduling during graceful termination: ([#41061](https://github.com/kubernetes/website/pull/41061))
- [zh-cn] sync version-skew-policy.md and configure-upgrade-etcd.md ([#41060](https://github.com/kubernetes/website/pull/41060))
- Fix version number for StatefulSetAutoDeletePVC feature introduction ([#41059](https://github.com/kubernetes/website/pull/41059))
- Update static-pod.md ([#41058](https://github.com/kubernetes/website/pull/41058))
- add improvement as per issue 28427 ([#41057](https://github.com/kubernetes/website/pull/41057))
- [hi] Localized content/en/docs/tasks/administer-cluster/access-cluster-api.md in hindi  ([#41056](https://github.com/kubernetes/website/pull/41056))

#### Open Discussions

- Discussion on Katacoda removal and possible replacement ([#38878](https://github.com/kubernetes/website/discussions/38878))

#### Merged Pull Requests

- [pt] Fix broken link ([#41068](https://github.com/kubernetes/website/pull/41068))
- Revise API resource encryption at rest: introduction ([#41055](https://github.com/kubernetes/website/pull/41055))

### k8s.io

#### Open Issues

- Broken link for cert-manager ([#5257](https://github.com/kubernetes/k8s.io/issues/5257))

#### Open Pull Requests

- cert-manager link update ([#5258](https://github.com/kubernetes/k8s.io/pull/5258))
- audit: update as of 2023-05-10 ([#5256](https://github.com/kubernetes/k8s.io/pull/5256))
- Update prow to v20230510-d63b2eb0d2 and ghproxy as needed ([#5255](https://github.com/kubernetes/k8s.io/pull/5255))
- eks-prow-build-cluster: create scripts for TF state buckets ([#5253](https://github.com/kubernetes/k8s.io/pull/5253))

#### Merged Pull Requests

- Promoting gateway-api admission-server v0.7.0-rc2 ([#5259](https://github.com/kubernetes/k8s.io/pull/5259))
- audit: update as of 2023-05-10 ([#5254](https://github.com/kubernetes/k8s.io/pull/5254))

### kubernetes

#### Open Issues

- generic vs platform/backend-specific options in kube-proxy ([#117909](https://github.com/kubernetes/kubernetes/issues/117909))
- Remove very old etcd versions from the bundled versions list ([#117906](https://github.com/kubernetes/kubernetes/issues/117906))

#### Open Pull Requests

- kubeadm: Remove leading zeros from etcd member ID in log messages ([#117919](https://github.com/kubernetes/kubernetes/pull/117919))
- Automated cherry pick of #117768: QueryParamVerifierV3 resilient to minimal OpenAPI V3
#117796: QueryParamVerifier falls back on invalid v3 document ([#117918](https://github.com/kubernetes/kubernetes/pull/117918))
- Automated cherry pick of #117792: kubeadm: Use internal etcd client through an interface
#117724: kubeadm: Make etcd member removal idempotent ([#117916](https://github.com/kubernetes/kubernetes/pull/117916))
- test: images: add sample-device-plugin to the config ([#117908](https://github.com/kubernetes/kubernetes/pull/117908))
- Fix a bug where the AttachedVolume is not printed correctly in the log ([#117907](https://github.com/kubernetes/kubernetes/pull/117907))
- Automated cherry pick of #117861: kubeadm: fix a bug where file copy(backup) could not be ([#117905](https://github.com/kubernetes/kubernetes/pull/117905))
- fix:translations zh_CN LC_MESSAGES k8s.po error ([#117904](https://github.com/kubernetes/kubernetes/pull/117904))
- feature(DynamicResources): return Skip in PreFilter ([#117903](https://github.com/kubernetes/kubernetes/pull/117903))
- test/e2e/dra: update README ([#117902](https://github.com/kubernetes/kubernetes/pull/117902))
- Use getter function for plugin subcommand resolution ([#117901](https://github.com/kubernetes/kubernetes/pull/117901))

#### Merged Pull Requests

- using --max-time instead of --connect-timeout for e2e/network/service tests. ([#117913](https://github.com/kubernetes/kubernetes/pull/117913))
- DRA: fix image build on Mac ([#117912](https://github.com/kubernetes/kubernetes/pull/117912))
- apimachinery/util: stop using deprecated io/ioutil ([#117900](https://github.com/kubernetes/kubernetes/pull/117900))

#### Closed Pull Requests

- WIP: kubelet: stop probe ticker from running while probe is executing ([#117915](https://github.com/kubernetes/kubernetes/pull/117915))

### dashboard

#### Open Issues

- Best practices implementing authentication via OIDC ([#7728](https://github.com/kubernetes/dashboard/issues/7728))

### mount-utils

#### Open Issues

- Module cli requirements ([#13](https://github.com/kubernetes/mount-utils/issues/13))

### autoscaler

#### Open Issues

- [Magnum][ClusterAutoscaler] Error finding node group UUID for node ([#5751](https://github.com/kubernetes/autoscaler/issues/5751))

#### Open Pull Requests

- fix: empty status configmap leads to nil ptr error ([#5752](https://github.com/kubernetes/autoscaler/pull/5752))
- Fix scale-up similar node group computation ([#5750](https://github.com/kubernetes/autoscaler/pull/5750))

### perf-tests

#### Open Issues

- Add measurement for running commands within in-cluster pods ([#2262](https://github.com/kubernetes/perf-tests/issues/2262))

### client-go

#### Open Issues

- How to know all items have been handled by handler ([#1250](https://github.com/kubernetes/client-go/issues/1250))
- How to force delete a pod ([#1249](https://github.com/kubernetes/client-go/issues/1249))

### node-problem-detector

#### Open Issues

- build failed at v0.8.13 and lastet master ([#752](https://github.com/kubernetes/node-problem-detector/issues/752))

### org

#### Open Issues

- REQUEST: New membership for @vishalanarase ([#4206](https://github.com/kubernetes/org/issues/4206))

#### Merged Pull Requests

- Add eddycharly to kubernetes-sigs members ([#4207](https://github.com/kubernetes/org/pull/4207))

### kube-state-metrics

#### Open Pull Requests

- Use dl.k8s.io instead of kubernetes-release bucket ([#2064](https://github.com/kubernetes/kube-state-metrics/pull/2064))
- Use dl.k8s.io instead of kubernetes-release bucket ([#2063](https://github.com/kubernetes/kube-state-metrics/pull/2063))

#### Closed Pull Requests

- Merge pull request #1390 from andreihagiescu-db/andreihagiescu-db-resourceversion ([#2062](https://github.com/kubernetes/kube-state-metrics/pull/2062))

### cloud-provider-vsphere

#### Open Pull Requests

- Use a meaningful user agent name ([#721](https://github.com/kubernetes/cloud-provider-vsphere/pull/721))

### community

#### Merged Pull Requests

- Add kubectl-validate channel ([#7290](https://github.com/kubernetes/community/pull/7290))

### cloud-provider-gcp

#### Open Pull Requests

- Modify Multi-network annotation generation. ([#539](https://github.com/kubernetes/cloud-provider-gcp/pull/539))

### test-infra

#### Open Pull Requests

- use dl.k8s.io, not kubernetes-release bucket ([#29495](https://github.com/kubernetes/test-infra/pull/29495))
- Update k8s-staging-test-infra images as needed ([#29493](https://github.com/kubernetes/test-infra/pull/29493))
- Run cloud-provider-openstack e2e tests when Dockerfile is changed ([#29485](https://github.com/kubernetes/test-infra/pull/29485))
- node: ci: Enable nodefeature test execution in CI for release branches ([#29483](https://github.com/kubernetes/test-infra/pull/29483))
- fix expected exit directly without waiting for lister ready ([#29480](https://github.com/kubernetes/test-infra/pull/29480))

#### Merged Pull Requests

- Revert "Merge pull request #29477 from listx/update-integration-test-… ([#29497](https://github.com/kubernetes/test-infra/pull/29497))
- Update Prow to v20230510-91962c0408 ([#29494](https://github.com/kubernetes/test-infra/pull/29494))
- Bump CI timeout and requests/limits for (pull|ci)-kubernetes-local-e2e ([#29492](https://github.com/kubernetes/test-infra/pull/29492))
- Updating remaining windows 1.24 jobs to use capz release-1.6 ([#29489](https://github.com/kubernetes/test-infra/pull/29489))
- kind: skip e2es when not making source code changes or only change im… ([#29488](https://github.com/kubernetes/test-infra/pull/29488))
- Add "required" job for kubectl-validate ([#29487](https://github.com/kubernetes/test-infra/pull/29487))
- cluster-capacity: Bump master k8s version to v1.27 ([#29484](https://github.com/kubernetes/test-infra/pull/29484))
- always run host process deployment e2e test ([#29481](https://github.com/kubernetes/test-infra/pull/29481))
- run some Azure CSI driver e2e tests on 1.27 ([#29479](https://github.com/kubernetes/test-infra/pull/29479))

#### Closed Pull Requests

- fix integration job ([#29496](https://github.com/kubernetes/test-infra/pull/29496))
- Update azurefile-csi-driver-config.yaml ([#29482](https://github.com/kubernetes/test-infra/pull/29482))

### release

#### Open Pull Requests

- bump cosign to v2.0.2 ([#3043](https://github.com/kubernetes/release/pull/3043))

### enhancements

#### Open Pull Requests

- KEP-3726: Add WebSocket as a standard protocol ([#3996](https://github.com/kubernetes/enhancements/pull/3996))

### kops

#### Open Pull Requests

- add removeAll to vfs ([#15395](https://github.com/kubernetes/kops/pull/15395))
- scaleway: dns support ([#15393](https://github.com/kubernetes/kops/pull/15393))
- Automated cherry pick of #15348: makefile: use go run to execute ko
#15380: Update ko to v0.13.0 ([#15392](https://github.com/kubernetes/kops/pull/15392))

#### Merged Pull Requests

- Automated cherry pick of #15360: If the Cluster Name is not default the hubble relay shows TLS ([#15397](https://github.com/kubernetes/kops/pull/15397))

### sig-release

#### Open Pull Requests

- Updating Enhancements Role-handbook ([#2240](https://github.com/kubernetes/sig-release/pull/2240))

#### Merged Pull Requests

- Add 1.28 Docs Shadows ([#2239](https://github.com/kubernetes/sig-release/pull/2239))
- Add v1.28 Enhancements shadows ([#2237](https://github.com/kubernetes/sig-release/pull/2237))
- Add 1.28 CI Signal shadows ([#2236](https://github.com/kubernetes/sig-release/pull/2236))
- Add branch manager for 1.28 ([#2235](https://github.com/kubernetes/sig-release/pull/2235))
- add release notes shadows for 1.28 release team ([#2234](https://github.com/kubernetes/sig-release/pull/2234))

### ingress-gce

#### Open Pull Requests

- Emit Events on THC (mis)configuration ([#2111](https://github.com/kubernetes/ingress-gce/pull/2111))

#### Merged Pull Requests

- Remove verbose arg from cloudbuild.yaml ([#2110](https://github.com/kubernetes/ingress-gce/pull/2110))
- Build binaries for docker images in cloudbuild.yaml ([#2108](https://github.com/kubernetes/ingress-gce/pull/2108))

#### Closed Pull Requests

- Remove VERBOSE from build yaml ([#2109](https://github.com/kubernetes/ingress-gce/pull/2109))

### kompose

#### Open Pull Requests

- chore(deps)(deps): bump golang.org/x/tools from 0.8.0 to 0.9.1 ([#1639](https://github.com/kubernetes/kompose/pull/1639))

### cloud-provider-openstack

#### Open Pull Requests

- [occm] add secret enabled option ([#2239](https://github.com/kubernetes/cloud-provider-openstack/pull/2239))