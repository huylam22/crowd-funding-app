import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.scss";
import "react-quill/dist/quill.snow.css";
import { apiUrl, imgbbAPI } from "config/config";
import { Button } from "components/button";
import { Dropdown } from "components/dropdown";
import { Input, TextArea } from "components/input";
import { Label } from "components/label";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import DatePicker from "react-datepicker";
import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import ImageUpload from "components/image/ImageUpload";
import ImageUploader from "quill-image-uploader";
import React, { useEffect, useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import useOnChange from "hooks/useOnChange";

Quill.register("modules/imageUploader", ImageUploader);

const categoies = [
  "architecture",
  "education",
  "environment",
  "health",
  "human-rights",
  "technology",
  "travel",
  "volunteer",
  "other",
];
const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const [placeholderOption, setPlaceholderOption] = useState("Select Country");
  // https://restcountries.com/v3.1/name/{name}

  const resetValues = () => {
    setStartDate("");
    setEndDate("");
    reset({});
  };
  const handleAddNewCampaign = async (values) => {
    console.log("add new campaign", values);
    try {
      axios.post(`${apiUrl}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      resetValues();
      toast.success("Add new campaign successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: `${imgbbAPI}0d5467503381552181426932e9e1587a`,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
    setPlaceholderOption(value);
    setCountries([]);
  };

  const [filterCountry, setFilterCountry] = useOnChange(500);

  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);
  console.log();

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 font-bold px-14 text-text2 bg-text4 bg-opacity-5 rounded-xl text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title for your campaign"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("category", "Select category")}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoies &&
                  categoies.map((item, idx) => (
                    <Dropdown.Option
                      key={idx}
                      onClick={() =>
                        handleSelectDropdownOption("category", item)
                      }
                    >
                      {item}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label htmlFor="short_description">Short Description *</Label>
          <TextArea
            name="short_description"
            placeholder="Write a short description"
            control={control}
          ></TextArea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="story">Story</Label>
          <ReactQuill
            placeholder="Write a story for your campaign"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label htmlFor="image">Featured Image</Label>
            <ImageUpload
              onChange={setValue}
              name="featured_image"
            ></ImageUpload>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="goal">Goal*</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">Raised amount*</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="prefilled">Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm text-left text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10, 20, 30, 40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-sm text-left text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="end-method">Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={
                  getDropdownLabel("end-method") || "Select End Method"
                }
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Architecture</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="country">Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("country", "Select country")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            {/* <Input
              control={control}
              name="start-date"
              placeholder="Start Date"
              type="date"
            ></Input> */}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              isClearable
              placeholderText="Select your campaign start date"
              dateFormat="dd-MM-yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            {/* <Input
              control={control}
              name="end-date"
              placeholder="End Date"
              type="date"
            ></Input> */}
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              isClearable
              placeholderText="Select your campaign end date"
              dateFormat="dd-MM-yyyy"
            />
          </FormGroup>
        </FormRow>
        <div className="mt-10 text-center">
          <Button type="submit" kind="primary" className="px-10 mx-auto">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
