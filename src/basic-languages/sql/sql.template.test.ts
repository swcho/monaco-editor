/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { testTokenization } from '../test/testRunner';

testTokenization('sql', [
	// Templates
	[
		{
			line: '${TEST} HI',
			tokens: [
				{
					startIndex: 0,
					type: 'delimiter.template.sql'
				},
				{
					startIndex: 2,
					type: 'variable.template.sql'
				},
				{
					startIndex: 6,
					type: 'delimiter.template.sql'
				},
				{
					startIndex: 7,
					type: 'white.sql'
				},
				{
					startIndex: 8,
					type: 'identifier.sql'
				}
			]
		},
		{
			line: "select '${TEST}' from users",
			tokens: [
				{
					startIndex: 0,
					type: 'keyword.sql'
				},
				{
					startIndex: 6,
					type: 'white.sql'
				},
				{
					startIndex: 7,
					type: 'string.sql'
				},
				{
					startIndex: 8,
					type: 'delimiter.template.sql'
				},
				{
					startIndex: 10,
					type: 'variable.template.sql'
				},
				{
					startIndex: 14,
					type: 'delimiter.template.sql'
				},
				{
					startIndex: 15,
					type: 'string.sql'
				},
				{
					startIndex: 16,
					type: 'white.sql'
				},
				{
					startIndex: 17,
					type: 'keyword.sql'
				},
				{
					startIndex: 21,
					type: 'white.sql'
				},
				{
					startIndex: 22,
					type: 'identifier.sql'
				}
			]
		}
	]
]);
