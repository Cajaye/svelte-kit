import supabase from '$lib/supabase';

export async function get() {
	const { data, error } = await supabase.from('table').select('*');
	if (error)
		return {
			status: 404
		};
	return {
		status: 200,
		body: { data }
	};
}
