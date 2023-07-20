<script lang="ts">
	import { PricingTable } from "@lib/types";

	export let lang: "en" | "lt";
	export let prices: PricingTable;


	let pricing_header_1 =
		lang == "en"
			? "Session with 1 counsellor"
			: "Konsultuoja 1 psichoterapeutė / -as";

	let pricing_header_2 =
		lang == "en"
			? "Session with 2 counsellors"
			: "Konsultuoja 2 psichoterapeutai";
</script>

<article>

	<div class="table-wrapper">
		<table
			style="
			--content-1: '{pricing_header_1}: ';
			--content-2: '{pricing_header_2}: ';
			"
		>
			<thead>
				<th />
				<th>{pricing_header_1}</th>
				<th>{pricing_header_2}</th>
			</thead>
			<tbody
				>{#each prices as price}
					<tr>
						<td>
							<div class="annotation">
							{price.label[lang]}
							</div>
						</td>
						<td class="number">
							{price.price_1} €
						</td>
						<td class="number">
							{price.price_2} €
						</td>
					</tr>
				{/each}</tbody
			>
		</table>
	</div>
</article>

<style>
	.table-wrapper {
		margin: 2em 0;
	}

	td::before {
		display: none;
	}

	table {
		/* table-layout: fixed; */
		width: 100%;
		border-collapse: collapse;
	}

	table th {
		vertical-align: bottom;
		padding-bottom: 1em;
		text-align: left;
	}

	table td {
		vertical-align: center;
		padding: 1em 2em;
	}

	tr {
		padding: 0.5em;
		border-radius: 5px;
	}

	tr:hover {
		background-color: var(--color-background-accent);
		transition: background-color 200ms ease-in-out;
	}

	.number:hover {
		font-weight: bold;
		transition: font-weight 100ms ease-in-out;
	}

	@media (max-width: 1024px) {
		table,
		tr,
		td {
			display: block;
		}

		tr {
			padding: 0.5em 2vw;
		}

		tr:nth-child(odd) {
			background-color: var(--color-background-accent);
		}

		th {
			display: none;
		}

		td::before {
			display: inline;
			font-weight: bold;
		}

		td:nth-child(2)::before {
			content: var(--content-1);
		}

		td:nth-child(3)::before {
			content: var(--content-2);
		}

		.annotation {
			border-bottom: 2px dashed var(--color-primary);
		}
	}
</style>
