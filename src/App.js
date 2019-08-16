import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { defineMessages, IntlProvider } from 'react-intl';
import { PipelineRuns } from '@tektoncd/dashboard-components';

const messages = defineMessages({
  'dashboard.pipelineRuns.transitionTime': 'Last Update'
});

function App() {
  return (
    <Router>
      <IntlProvider messages={messages}>
        <PipelineRuns
          pipelineName="Pipeline Name"
          selectedNamespace="default"
          pipelineRuns={[
            {
              metadata: {
                name: 'pipeline-run-20190816124708',
                namespace: 'cb4552a6-b2d7-45e2-9773-3d4ca33909ff',
                uid: '7c266264-4d4d-45e3-ace0-041be8f7d06e'
              },
              spec: {
                pipelineRef: {
                  name: 'pipeline'
                }
              },
              status: {
                conditions: [
                  {
                    lastTransitionTime: '2019-08-16T12:49:28Z',
                    message: 'All Tasks have completed executing',
                    reason: 'Succeeded',
                    status: 'True',
                    type: 'Succeeded'
                  }
                ]
              }
            },
            {
              metadata: {
                name: 'pipeline-run-20190816170431',
                namespace: '21cf1eac-7392-4e67-a4d0-f654506fe04d',
                uid: 'a7812005-f766-4877-abd4-b3d418b04f66'
              },
              spec: {
                pipelineRef: {
                  name: 'pipeline'
                }
              },
              status: {
                conditions: [
                  {
                    lastTransitionTime: '2019-08-16T17:10:49Z',
                    message: 'Not all Tasks have completed executing',
                    reason: 'Running',
                    status: 'Unknown',
                    type: 'Succeeded'
                  }
                ]
              }
            }
          ]}
          cancelPipelineRun={({ name, namespace }) => console.log('cancel PipelineRun', { name, namespace })}
        />
      </IntlProvider>
    </Router>
  );
}

export default App;
