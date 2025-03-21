import { describe, it, expect } from "vitest";
import { formatDateToYMD } from "@/utils/date";

describe("formatDateToYMD", () => {
    it("should format date to YYYY/MM/DD", () => {
        const date = new Date("2023-10-01");
        const formattedDate = formatDateToYMD(date);
        expect(formattedDate).toBe("2023/10/01");
    });
});