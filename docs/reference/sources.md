---
last_modified_on: "2020-03-31"
title: Sources
description: "Sources are reponsible for collect or receiving log and metrics data. These could be local sources, like a file, or a protocols, like HTTP or TCP."
sidebar_label: hidden
hide_pagination: true
---

import QoveryComponents from '@site/src/components/QoveryComponents';

Sources are responsible for ingesting [events][docs.data-model] into
Qovery, they can both receive and pull in data. If you're deploying Qovery as
a [daemon][docs.strategies#daemon] or [sidecar][docs.strategies#sidecar], you'll
want to user local data sources like the [`file`][docs.sources.file] or
[`stdin`][docs.sources.stdin] sources. If you're deploying Qovery as a
[service][docs.strategies#service], you'll want to use sources that receive data
over the network, like the [`qovery`][docs.sources.qovery],
[`socket`][docs.sources.socket], and [`syslog`][docs.sources.syslog] sources.

---

<QoveryComponents titles={false} sinks={false} transforms={false} />


[docs.data-model]: /docs/about/data-model/
[docs.sources.file]: /docs/reference/sources/file/
[docs.sources.socket]: /docs/reference/sources/socket/
[docs.sources.stdin]: /docs/reference/sources/stdin/
[docs.sources.syslog]: /docs/reference/sources/syslog/
[docs.sources.qovery]: /docs/reference/sources/qovery/
[docs.strategies#daemon]: /docs/setup/deployment/strategies/#daemon
[docs.strategies#service]: /docs/setup/deployment/strategies/#service
[docs.strategies#sidecar]: /docs/setup/deployment/strategies/#sidecar
