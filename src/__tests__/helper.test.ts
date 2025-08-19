import { formatTime } from "../utils/helper";
describe("formatTime", () => {
  it("formats seconds to mm:ss", () => {
    expect(formatTime(125)).toBe("02:05");
    expect(formatTime(0)).toBe("00:00");
  });
});
