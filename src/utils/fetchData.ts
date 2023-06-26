const DEFAULT_AUTHOR_HOST = process.env.NEXT_PUBLIC_DEFAULT_AUTHOR_HOST;
const DEFAULT_PUBLISH_HOST = process.env.NEXT_PUBLIC_DEFAULT_PUBLISH_HOST;

export const getAuthorHost = (): string | null => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    if (searchParams.has("authorHost")) {
        return searchParams.get("authorHost");
    } else {
        return DEFAULT_AUTHOR_HOST || null;
    }
}

export const getPublishHost = (): string | null => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    if (searchParams.has("publishHost")) {
        return searchParams.get("publishHost");
    } else {
        return DEFAULT_PUBLISH_HOST || null;
    }
}
