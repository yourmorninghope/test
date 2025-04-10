interface Response {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: string[];
    favourite: Record<string, string>
}

export const transformCatResponse = (response: Response[]) => {
    const dataUrl = response?.[0]?.url ?? "";

    return dataUrl
}