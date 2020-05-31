export const getRecords = async () => {
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Artifacts?view=Grid%20view`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    },
  );

  const result = await response.json();

  return result.records;
};
