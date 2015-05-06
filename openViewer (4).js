$(document).ready(function() {
	$("#ell-main").load("/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/content.html", function() {
		initELLMain();
	});
});

function initELLMain() {

	var HOME_HEIGHT = 1400;
	var PAGE1_HEIGHT = 2280;
	var PAGE2_HEIGHT = 1550;
	var PAGE3_HEIGHT = 1350;
	initSlide();
	initInclusion();
	initPerformance();
	initEthnicity();
	initPlaces();

	$(".grade-sel").select2({
		minimumResultsForSearch : -1
	});
	$('#results .bar-item').click(function(event) {
		event.preventDefault();

		$(this).toggleClass('bar-open');

		$('#results .bar-item').not(this).each(function(i) {
			$(this).removeClass('bar-open');
			$("#" + $(this).attr("id") + "-message").hide();
		});

		$("#" + $(this).attr("id") + "-message").slideToggle();
	});

	function initSlide() {
		var i = 0;
		var iCurrent = 1;
		var iTotal = 4;

		checkCurrent();

		$("#image_" + iCurrent).show();

		$("#nav_1").click(function(event) {
			event.preventDefault();
			show(1);
		});

		$("#nav_2").click(function(event) {
			event.preventDefault();
			show(2);
		});

		$("#nav_3").click(function(event) {
			event.preventDefault();
			show(3);
		});

		$("#nav_4").click(function(event) {
			event.preventDefault();
			show(4);
		});

		$("#nav_5").click(function(event) {
			event.preventDefault();
			show(5);
		});

		shortcut.add("Right", function() {
			next();
			stopCycle();
		});

		shortcut.add("Left", function() {
			prev();
			stopCycle();
		});

		function stopCycle() {
		}


		$('#next_key').click(function(event) {
			event.preventDefault();
			next();
			stopCycle();
		});

		$('#prev_key').click(function(event) {
			event.preventDefault();
			prev();
			stopCycle();
		});

		function checkCurrent() {
			switch (iCurrent) {
			case 1:
				//when showId == iCurrent
				$("#showcase-bg").height(HOME_HEIGHT);
				break;
			case 2:
				$("#showcase-bg").height(PAGE1_HEIGHT);
				break;
			case 3:
				$("#showcase-bg").height(PAGE2_HEIGHT);
				break;
			case 4:
				$("#showcase-bg").height(PAGE3_HEIGHT);
				break;
			case 5:
				$("#showcase-bg").height(PAGE4_HEIGHT);
			default:
				break;
			}
		}

		function next() {
			// console.log(iCurrent);
			//<!-- beging old codes -->
			if (iCurrent >= iTotal) {
				$("#image_1").show('slide', {
					direction : 'right'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'left'
				}, 1000);
				iCurrent = 1;
			} else {
				$("#image_" + (iCurrent + 1)).show('slide', {
					direction : 'right'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'left'
				}, 1000);
				iCurrent++;
			}
			//resetStatus(iCurrent);
			checkCurrent();
			$(".selected", "#header1").removeClass("selected");
			$("#nav_" + iCurrent).addClass("selected");
			//<!-- end -->
		}

		function prev() {
			if (iCurrent <= 1) {
				$("#image_" + iTotal).show('slide', {
					direction : 'left'
				}, 1000);
				$("#image_1").hide('slide', {
					direction : 'right'
				}, 1000);
				iCurrent = iTotal;
			} else {
				$("#image_" + (iCurrent - 1)).show('slide', {
					direction : 'left'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'right'
				}, 1000);
				iCurrent--;
			}
			//resetStatus(iCurrent);
			checkCurrent();

			$(".selected", "#header1").removeClass("selected");
			$("#nav_" + iCurrent).addClass("selected");
		}

		function show(showId) {

			//resetStatus(showId);

			//
			if (showId == iCurrent) {
				return;
			}
			if (showId < iCurrent) {
				$("#image_" + showId).show('slide', {
					direction : 'left'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'right'
				}, 1000);
				$("#sh_" + iCurrent).show();
			} else {
				$("#image_" + showId).show('slide', {
					direction : 'right'
				}, 1000);
				$("#image_" + iCurrent).hide('slide', {
					direction : 'left'
				}, 1000);
			}
			iCurrent = parseInt(showId);
			checkCurrent();

			$(".selectionHeader").hide();
			$(".selected", "#header1").removeClass("selected");
			if (iCurrent != 1) {
				$("#nav_" + iCurrent).addClass("selected");
			}
		}


		$('#imgDetail li img').hover(function() {
			$('#bigImg').attr('src', $(this).attr('src'));
		});
		$('#fig0Detail map area').hover(function() {
			$('#fig0emp').attr('src', $(this).attr('src'));
		});
		//$('#fig1Detail map area').hover(function () {
		//    $('#fig1emp').attr('src', $(this).attr('src'));
		//});
		$('#fig1Detail map area').click(function(e) {
			e.preventDefault();
			$('#fig1emp').attr('src', $(this).attr('src'));
		});
		//$('#fig2Detail map area').hover(function(){
		//    $('#fig2emp').attr('src',$(this).attr('src'));
		//});
		$('#fig2Detail map area').click(function(e) {
			e.preventDefault();
			$('#fig2emp').attr('src', $(this).attr('src'));
		});
		//$('#fig3Detail map area').hover(function(){
		//    $('#fig3emp').attr('src',$(this).attr('src'));
		//});
		$('#fig3Detail map area').click(function(e) {
			e.preventDefault();
			$('#fig3emp').attr('src', $(this).attr('src'));
		});

		//function resetStatus(showId) {
		//    if (parseInt(showId) == 5) {
		//        $image = $('#image_5');
		//        $('.bar-item', $image).each(
		//            function (i) {
		//                $(this).removeClass('sidebar-open');
		//            });
		//        $('.message', $image).each(
		//           function (i) {
		//               $(this).css('display', 'none');
		//           });
		//        $('#mathDetails').hide();
		//        $('#readingDetails').hide();
		//        $("#showcase-bg").height(PAGE3_HEIGHT);
		//    }
		//}

		$('#header2 .homeicon').on('click', function(e) {
			show(1);
		});
	}

	function initInclusion() {
		initData();
		function initData() {
			var $Part_I = $("#image_2 .Part_I");
			var $Part_II = $("#image_2 .Part_II");
			var $Part_III = $("#image_2 .Part_III");
			var $Part_IV = $("#image_2 .Part_IV");
			var Part_I = {};
			var Part_II = {};
			var Part_III = {};
			var Part_IV = {};

			//Part_I
			Part_I['G4_R'] = 'Of all students in the 4th-grade reading assessment in 2013...';
			Part_I['G4_M'] = 'Of all students in the 4th-grade mathematics assessment in 2013...';
			Part_I['G8_R'] = 'Of all students in the 8th-grade reading assessment in 2013...';
			Part_I['G8_M'] = 'Of all students in the 8th-grade mathematics assessment in 2013...';

			//Part_II image
			Part_II['G4_R'] = 'Grade4_Reading.png';
			Part_II['G4_M'] = 'Grade4_Mathematics.png';
			Part_II['G8_R'] = 'Grade8_Reading.png';
			Part_II['G8_M'] = 'Grade8_Mathematics.png';

			//Part_III
			Part_III['G4_R'] = 'In grade 4, reading...';
			Part_III['G4_M'] = 'In grade 4, mathematics...';
			Part_III['G8_R'] = 'In grade 8, reading...';
			Part_III['G8_M'] = 'In grade 8, mathematics...';

			//Part_IV
			Part_IV['G4_R'] = 'In grade 4, the percent of ELL students has continued to increase over each assessment year. Ten percent of participants in 2013 were ELL students, a signicant increase fromfive percen tin 1998.';
			Part_IV['G4_M'] = 'In grade 4, mathematics...';
			Part_IV['G8_R'] = 'In grade 8, reading...';
			Part_IV['G8_M'] = 'In grade 8, mathematics...';

			$('#image_2 .grade-sel').change(function(e) {
				var value = $(this).val();
				setContents(value);
			});
			function setContents(grade_subject) {
				var path = '/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/Images/grade_subject/Inclusion/';
				switch (parseInt(grade_subject)) {
				case 40:
					$Part_I.html(Part_I['G4_R']);
					$Part_II.attr('src', path + Part_II['G4_R']);
					$Part_III.html(Part_III['G4_R']);
					$Part_IV.html(Part_IV['G4_R']);
					break;
				case 41:
					$Part_I.html(Part_I['G4_M']);
					$Part_II.attr('src', path + Part_II['G4_M']);
					$Part_III.html(Part_III['G4_M']);
					$Part_IV.html(Part_IV['G4_M']);
					break;
				case 80:
					$Part_I.html(Part_I['G8_R']);
					$Part_II.attr('src', path + Part_II['G8_R']);
					$Part_III.html(Part_III['G8_R']);
					$Part_IV.html(Part_IV['G8_R']);
					break;
				case 81:
					$Part_I.html(Part_I['G8_M']);
					$Part_II.attr('src', path + Part_II['G8_M']);
					$Part_III.html(Part_III['G8_M']);
					$Part_IV.html(Part_IV['G8_M']);
					break;
				default:
					break;
				}
			}

			setContents($('#image_2 .grade-sel').val());
		}

	}

	function initPerformance() {
		var pageId = "#image_2";
		var PAGE1_HEIGHT_POPUP = 2380;
		var PAGE1_HEIGHT_HIDE = 2280;
		initData();

		function initData() {
			var $Part_I_Title = $(pageId + ' .Part_I_Title');
			var $Part_I_Text = $(pageId + ' .Part_I_Text');
			var $Part_I_Img = $(pageId + " .Part_I_Img");

			var $Part_II_Title = $(pageId + ' .Part_II_Title');
			var $Part_II_Text = $(pageId + " .Part_II_Text");
			var $Part_II_Img = $(pageId + " .Part_II_Img");

			var $Part_Title = $(pageId + ' .Part_Title');
			var $Part_Img = $(pageId + " .Part_Img");

			var $Part_Text = $(pageId + " .Part_Text");

			var Part_I_Title = {};
			var Part_I_Text = {};
			var Part_I_Img = {};
			var Part_II_Title = {};
			var Part_II_Text = {};
			var Part_II_Img = {};
			var Part_Title = {};
			var Part_Img = {};
			var Part_Text = {};

			//Part_I Titile
			Part_I_Title['G4_R'] = "Trend in grade 4 NAEP reading average scale scores for public school students who are identified as English language learners: Various years, 1998&ndash;2013";
			Part_I_Title['G8_R'] = "Trend in grade 8 NAEP reading average scale scores for public school students who are identified as English language learners: Various years, 1998&ndash;2013";
			Part_I_Title['G4_M'] = "Trend in grade 4 NAEP mathematics average scale scores for public school students who are identified as English language learners: Various years, 1996&ndash;2013";
			Part_I_Title['G8_M'] = "Trend in grade 8 NAEP mathematics average scale scores for public school students who are identified as English language learners: Various years, 1996&ndash;2013";

			//Part_I Text
			Part_I_Text['G4_R'] = "<br />This line graph shows the trend in ELL students&#39; average scale scores over time. Compared with average scale scores from 1998, grade 4 reading average scale scores for ELL students in 2013 increased from 174 to 187. The average score for ELL students in 2013, 187, was lower than that of non-ELL students, 225 (not shown).";
			Part_I_Text['G4_M'] = '<br />This line graph shows the trend in ELL students&#39; average scale scores over time. Compared with average scale scores from 1998, grade 4 mathematics average scale scores for ELL students in 2013 increased from 201 to 219. The average score for ELL students in 2013, 219, was lower than that of non-ELL students, 244 (not shown).';
			Part_I_Text['G8_R'] = '<br />This line graph shows the trend in ELL students&39; average scale scores over time. Compared with average scale scores from 1998, grade 4 reading average scale scores for ELL students in 2013 increased from 217 to 225. The average score for ELL students in 2013, 225, was lower than that of non-ELL students, 268 (not shown).';
			Part_I_Text['G8_M'] = '<br />This line graph shows the trend in ELL students&#39; average scale scores over time. Compared with average scale scores from 1998, grade 4 mathematics average scale scores for ELL students in 2013 increased from 226 to 245. The average score for ELL students in 2013, 245, was lower than that of non-ELL students, 286 (not shown).';

			//Part_I image
			Part_I_Img['G4_R'] = 'Grade4_Reading_AveSS.png';
			Part_I_Img['G4_M'] = 'Grade4_Mathematics_AveSS.png';
			Part_I_Img['G8_R'] = 'Grade8_Reading_AveSS.png';
			Part_I_Img['G8_M'] = 'Grade8_Mathematics_AveSS.png';

			//Part_II Titile
			Part_II_Title['G4_R'] = "Trend in grade 4 NAEP reading percentile scores for public school students who are identified as English language learners: Various years, 1998&ndash;2013";
			Part_II_Title['G8_R'] = "Trend in grade 8 NAEP reading percentile scores for public school students who are identified as English language learners: Various years, 1998&ndash;2013";
			Part_II_Title['G4_M'] = "Trend in grade 4 NAEP mathematics percentile score for public school students who are identified as English language learners: Various years, 1996&ndash;2013";
			Part_II_Title['G8_M'] = "Trend in grade 8 NAEP mathematics percentile score for public school students who are identified as English language learners: Various years, 1996&ndash;2013";

			//Part_II Text
			Part_II_Text['G4_R'] = '<br />Average scores for the various percentile groups are represented by the box and whiskers plot. Scores for ELL students at 50th percentile increased between 1998 and 2013. Click the figure to learn more.';
			Part_II_Text['G4_M'] = '<br />Average scores for the various percentile groups are represented by the box and whiskers plot. Scores for ELL students at the 10th, 25th, and 75th percentiles increased between 1996 and 2013. Click the figure to learn more.';
			Part_II_Text['G8_R'] = '<br />Average scores for the various percentile groups are represented by the box and whiskers plot. Scores for ELL students at the 50th percentile increased between 1998 and 2013. Click the figure to learn more.';
			Part_II_Text['G8_M'] = '<br />Average scores for the various percentile groups are represented by the box and whiskers plot. Scores for ELL students at the 25th, 50th, 75th, and 90th percentiles increased between 1996 and 2013. Click the figure to learn more.';

			//Part_II_Img
			Part_II_Img['G4_R'] = 'Grade4_Reading_AveSSByPerc.svg';
			Part_II_Img['G4_M'] = 'Grade4_Mathematics_AveSSByPerc.svg';
			Part_II_Img['G8_R'] = 'Grade8_Reading_AveSSByPerc.svg';
			Part_II_Img['G8_M'] = 'Grade8_Mathematics_AveSSByPerc.svg';

			//Title
			Part_Title['G4_R'] = 'Percentage of grade 4 public school students who are identified as English language learner, by state/jurisdiction: 2013';
			Part_Title['G4_M'] = 'Percentage of grade 4 public school students who are identified as English language learner, by state/jurisdiction: 2013';
			Part_Title['G8_R'] = 'Percentage of grade 8 public school students who are identified as English language learner, by state/jurisdiction: 2013';
			Part_Title['G8_M'] = 'Percentage of grade 8 public school students who are identified as English language learner, by state/jurisdiction: 2013';

			//image
			Part_Img['G4_R'] = 'Grade4_Reading.svg';
			Part_Img['G4_M'] = 'Grade4_Mathematics.svg';
			Part_Img['G8_R'] = 'Grade8_Reading.svg';
			Part_Img['G8_M'] = 'Grade8_Mathematics.svg';

			//text
			Part_Text['G4_R'] = 'In 2013, ELL students in <span class="highlighted">12 states</span> scored above the national average for 4th-grade reading (187), while students in <span class="highlighted">12 states</span> scored below the national average. Five states had insufficient data to permit a reliable estimate.';
			Part_Text['G4_M'] = 'In 2013, ELL students in <span class="highlighted">10 states</span> scored above the national average for 4th-grade mathematics (219), while students in <span class="highlighted">13 states</span> scored below the national average. Five states had insufficient data to permit a reliable estimate.';
			Part_Text['G8_R'] = 'In 2013, ELL students in <span class="highlighted2">9 states</span> scored above the national average for 8th-grade reading (225), while students in <span class="highlighted2">5 states</span> scored below the national average. Eighteen states had insufficient data to permit a reliable estimate.';
			Part_Text['G8_M'] = 'In 2013, ELL students in <span class="highlighted2">8 states</span> scored above the national average for 8th-grade mathematics (245), while students in <span class="highlighted2">7 states</span> scored below the national average. Sixteen states had insufficient data to permit a reliable estimate.';

			$(pageId + ' .grade-sel').change(function(e) {
				var value = $(this).val();
				setContents(value);
			});

			function setContents(grade_subject) {
				var path = '/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/Images/grade_subject/Performance/';

				switch (parseInt(grade_subject)) {
				case 40:
					$Part_I_Title.html(Part_I_Title['G4_R']);
					$Part_I_Text.html(Part_I_Text['G4_R']);
					$Part_I_Img.attr('src', path + Part_I_Img['G4_R']);
					$Part_II_Title.html(Part_II_Title['G4_R']);
					$Part_II_Text.html(Part_II_Text['G4_R']);
					$Part_II_Img.load(path + Part_II_Img['G4_R'], attachSvgEvent);
					$Part_Title.html(Part_Title['G4_R']);
					$Part_Img.load(path + Part_Img['G4_R'], attachSvgMapEventOne);
					$Part_Text.html(Part_Text['G4_R']);
					break;
				case 41:
					$Part_I_Title.html(Part_I_Title['G4_M']);
					$Part_I_Text.html(Part_I_Text['G4_M']);
					$Part_I_Img.attr('src', path + Part_I_Img['G4_M']);
					$Part_II_Title.html(Part_II_Title['G4_M']);
					$Part_II_Text.html(Part_II_Text['G4_M']);
					$Part_II_Img.load(path + Part_II_Img['G4_M'], attachSvgEvent);
					$Part_Title.html(Part_Title['G4_M']);
					$Part_Img.load(path + Part_Img['G4_M'], attachSvgMapEventTwo);
					$Part_Text.html(Part_Text['G4_M']);
					break;
				case 80:
					$Part_I_Title.html(Part_I_Title['G8_R']);
					$Part_I_Text.html(Part_I_Text['G8_R']);
					$Part_I_Img.attr('src', path + Part_I_Img['G8_R']);
					$Part_II_Title.html(Part_II_Title['G8_R']);
					$Part_II_Text.html(Part_II_Text['G8_R']);
					$Part_II_Img.load(path + Part_II_Img['G8_R'], attachSvgEvent);
					$Part_Title.html(Part_Title['G8_R']);
					$Part_Img.load(path + Part_Img['G8_R'], attachSvgMapEventThree);
					$Part_Text.html(Part_Text['G8_R']);
					break;
				case 81:
					$Part_I_Title.html(Part_I_Title['G8_M']);
					$Part_I_Text.html(Part_I_Text['G8_M']);
					$Part_I_Img.attr('src', path + Part_I_Img['G8_M']);
					$Part_II_Title.html(Part_II_Title['G8_M']);
					$Part_II_Text.html(Part_II_Text['G8_M']);
					$Part_II_Img.load(path + Part_II_Img['G8_M'], attachSvgEvent);
					$Part_Title.html(Part_Title['G8_M']);
					$Part_Img.load(path + Part_Img['G8_M'], attachSvgMapEventFour);
					$Part_Text.html(Part_Text['G8_M']);
					break;
				default:
					break;
				}
			}

			setContents($(pageId + ' .grade-sel').val());

		}

		//open the all,remove the all
		$('.showAll').click(function(e) {
			$('.col1,.col2,.col3,.col4,.col5,.col6,.col7,.col8,.row1,.row2,.row3,.row4,.row5,.row6,.row7,.row8').css('display', 'block');
		});

		function attachSvgEvent() {
			//click year
			$('.year').click(function(e) {
				if ($('<b></b>').addClass($(this).attr('class')).hasClass('one')) {
					reset();
					$(".col1").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('two')) {
					reset();
					$(".col2").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('three')) {
					reset();
					$(".col3").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('four')) {
					reset();
					$(".col4").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('five')) {
					reset();
					$(".col5").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('six')) {
					reset();
					$(".col6").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('seven')) {
					reset();
					$(".col7").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('eight')) {
					reset();
					$(".col8").css('display', 'block');
				}
			});
			//click percentile
			$('.percent').click(function(e) {
				if ($('<b></b>').addClass($(this).attr('class')).hasClass('one')) {
					reset();
					$(".row1").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('two')) {
					reset();
					$(".row2").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('three')) {
					reset();
					$(".row3").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('four')) {
					reset();
					$(".row4").css('display', 'block');
				} else if ($('<b></b>').addClass($(this).attr('class')).hasClass('five')) {
					reset();
					$(".row5").css('display', 'block');
				}
			});

			$('.end').click(function(e) {
				reset();
			});

			$('#resetAll').click(function(e) {
				reset();
			});

			$('.clickable').click(function(e) {
				if ($(this).text() == "90th percentile") {
					reset();
					$(".row5").css('display', 'block');
				} else if ($(this).text() == "70th percentile") {
					reset();
					$(".row4").css('display', 'block');
				} else if ($(this).text() == "50th percentile") {
					reset();
					$(".row3").css('display', 'block');
				} else if ($(this).text() == "25th percentile") {
					reset();
					$(".row2").css('display', 'block');
				} else {
					reset();
					$(".row1").css('display', 'block');
				}
			});
		}

		function reset() {
			return $('.col1,.col2,.col3,.col4,.col5,.col6,.col7,.col8,.row1,.row2,.row3,.row4,.row5,.row6,.row7,.row8').css('display', 'none');
		}

		function attachSvgMapEventOne() {

			var $Part_III_Text = $(pageId + " .Part_III_Text");
			var $Average = $(pageId + " .average");

			resetGrade4RMap();

			var G4_Rmap = new Map();

			//G4 Read
			G4_Rmap.set("National", 187);
			G4_Rmap.set("Arkansas", 202, "#15A6DF");
			G4_Rmap.set("Florida", 199, "#15A6DF");
			G4_Rmap.set("Indiana", 203, "#15A6DF");
			G4_Rmap.set("Kansas", 203, "#15A6DF");
			G4_Rmap.set("Louisiana", 202, "#15A6DF");
			G4_Rmap.set("Maryland", 207, "#15A6DF");
			G4_Rmap.set("Missouri", 197, "#15A6DF");
			G4_Rmap.set("Ohio", 205, "#15A6DF");
			G4_Rmap.set("South Carolina", 206, "#15A6DF");
			G4_Rmap.set("Texas", 194, "#15A6DF");
			G4_Rmap.set("Wyoming", 196, "#15A6DF");
			G4_Rmap.set("DoDEA", 216, "#15A6DF");

			G4_Rmap.set("Colorado", 192, "#8AC2DB");
			G4_Rmap.set("Connecticut", 181, "#8AC2DB");
			G4_Rmap.set("Delaware", 184, "#8AC2DB");
			G4_Rmap.set("District of Columbia", 182, "#8AC2DB");
			G4_Rmap.set("Georgia", 189, "#8AC2DB");
			G4_Rmap.set("Iowa", 195, "#8AC2DB");
			G4_Rmap.set("Kentucky", 197, "#8AC2DB");
			G4_Rmap.set("Maine", 190, "#8AC2DB");
			G4_Rmap.set("Massachusetts", 192, "#8AC2DB");
			G4_Rmap.set("Michigan", 194, "#8AC2DB");
			G4_Rmap.set("Minnesota", 188, "#8AC2DB");
			G4_Rmap.set("Nebraska", 190, "#8AC2DB");
			G4_Rmap.set("Nevada", 185, "#8AC2DB");
			G4_Rmap.set("New Hampshire", 196, "#8AC2DB");
			G4_Rmap.set("New Jersey", 188, "#8AC2DB");
			G4_Rmap.set("New York", 182, "#8AC2DB");
			G4_Rmap.set("North Carolina", 183, "#8AC2DB");
			G4_Rmap.set("Oklahoma", 186, "#8AC2DB");
			G4_Rmap.set("Oregon", 183, "#8AC2DB");
			G4_Rmap.set("Pennsylvania", 181, "#8AC2DB");
			G4_Rmap.set("Tennessee", 174, "#8AC2DB");
			G4_Rmap.set("Virginia", 186, "#8AC2DB");
			G4_Rmap.set("Wisconsin", 190, "#8AC2DB");

			G4_Rmap.set("Alaska", 154, "#DDEFF9");
			G4_Rmap.set("Arizona", 159, "#DDEFF9");
			G4_Rmap.set("California", 182, "#DDEFF9");
			G4_Rmap.set("Hawaii", 166, "#DDEFF9");
			G4_Rmap.set("Idaho", 170, "#DDEFF9");
			G4_Rmap.set("Illinois", 174, "#DDEFF9");
			G4_Rmap.set("Montana", 174, "#DDEFF9");
			G4_Rmap.set("New Mexico", 168, "#DDEFF9");
			G4_Rmap.set("Rhode Island", 168, "#DDEFF9");
			G4_Rmap.set("South Dakota", 160, "#DDEFF9");
			G4_Rmap.set("Utah", 159, "#DDEFF9");
			G4_Rmap.set("Washington", 179, "#DDEFF9");

			G4_Rmap.set("Alabama", "&nbsp&#8225", "#C1BDBB");
			G4_Rmap.set("Mississippi", "&nbsp&#8225", "#C1BDBB");
			G4_Rmap.set("North Dakota", "&nbsp&#8225", "#C1BDBB");
			G4_Rmap.set("Vermont", "&nbsp&#8225", "#C1BDBB");
			G4_Rmap.set("West Virginia", "&nbsp&#8225", "#C1BDBB");

			$('#resetMap').click(function(e) {
				$("#popup").css('display', 'none');
				$("#Layer_3").css("display", "none");
				$("#Layer_1 .grid.one").attr("fill", "#15A6DF");
				$("#Layer_1 .grid.two").attr("fill", "#8AC2DB");
				$("#Layer_1 .grid.three").attr("fill", "#DDEFF9");
				$("#Layer_1 .grid.four").attr("fill", "#C1BDBB");
				$("#lineRI").css("display", "none");
				$("#lineCT").css("display", "none");
				$("#showcase-bg").height(PAGE1_HEIGHT_HIDE);

				if (hasClass($('#mapWrapper'), 'open')) {
					removeClass($('#mapWrapper'), 'open');
				}
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});

				if (!hasClass($('#Layer_1'), 'blur')) {
					addClass($('#Layer_1'), 'blur');
				}
			});

			$('#Layer_2 .grid').click(function(e) {
				e.stopPropagation();
				resetMap();

				if (hasClass($('#Layer_1'), 'blur')) {
					removeClass($('#Layer_1'), 'blur');
				}

				//data outside
				if (!hasClass($('#mapWrapper'), 'open')) {
					addClass($('#mapWrapper'), 'open');
				}

				//map all white
				if ($("#Layer_1 .grid.one").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.one").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.two").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.two").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.three").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.three").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.four").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.four").attr("fill", "#FFFFFF");
				}

				//recover the last element
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});

				//add the new element
				$('.' + $(this).attr('class').replace('grid', '').trim()).each(function(i, item) {
					addClass($(item), 'exploded');
					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("one") > 0) {

						$("#Layer_1 .grid.one").attr("fill", "#15A6DF");

						$("#Layer_3").css("display", "block");
						$("#Layer_3 .grid.one").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");
						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("two") > 0) {

						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.two").attr("fill", "#8AC2DB");
						$("#Layer_3 .grid.two").css("display", "block");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");

						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "block");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("three") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.three").attr("fill", "#DDEFF9");
						$("#Layer_3 .grid.three").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");
						$("#lineRI").css("display", "block");
						$("#lineCT").css("display", "none");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("four") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.four").attr("fill", "#C1BDBB");
						$("#Layer_3 .grid.four").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}
				});
			});

			$('.states').click(function(e) {
				if (hasClass($(this), 'exploded')) {
					var state = this.id;
					var number = state + ":&nbsp" + G4_Rmap.get(state);
					var national = "National public average:" + "&nbsp" + G4_Rmap.get("National");
					$Average.html(national);
					$Part_III_Text.html(number);
					var color = $(this).attr("fill");
					$Part_III_Text.css('color', color);
					$("#popup").css('display', 'block');
					$("#showcase-bg").height(PAGE1_HEIGHT_POPUP);
				}
			});
		}

		function resetGrade4RMap() {
			$("#popup").css('display', 'none');
			$("#Layer_3").css("display", "none");
			$("#Layer_1 .grid.one").attr("fill", "#15A6DF");
			$("#Layer_1 .grid.two").attr("fill", "#8AC2DB");
			$("#Layer_1 .grid.three").attr("fill", "#DDEFF9");
			$("#Layer_1 .grid.four").attr("fill", "#C1BDBB");
			$("#lineRI").css("display", "none");
			$("#lineCT").css("display", "none");

			if (hasClass($('#mapWrapper'), 'open')) {
				removeClass($('#mapWrapper'), 'open');
			}
			$('.exploded').each(function(i, item) {
				removeClass($(item), 'exploded');
			});

			if (!hasClass($('#Layer_1'), 'blur')) {
				addClass($('#Layer_1'), 'blur');
			}
		}

		function attachSvgMapEventTwo() {

			resetGrade4MMap();

			var $Part_III_Text = $(pageId + " .Part_III_Text");
			var $Average = $(pageId + " .average");

			var G4_Mmap = new Map();

			//G4 Math
			G4_Mmap.set("National", 219);
			G4_Mmap.set("Arkansas", 231, "#66B597");
			G4_Mmap.set("Indiana", 203, "#66B597");
			G4_Mmap.set("Iowa", 195, "#66B597");
			G4_Mmap.set("Kansas", 203, "#66B597");
			G4_Mmap.set("North Carolina", 183, "#66B597");
			G4_Mmap.set("Ohio", 205, "#66B597");
			G4_Mmap.set("South Carolina", 206, "#66B597");
			G4_Mmap.set("Texas", 194, "#66B597");
			G4_Mmap.set("Virginia", 186, "#66B597B");
			G4_Mmap.set("DoDEA", 216, "#66B597");

			G4_Mmap.set("Alabama", 209, "#8BC540");
			G4_Mmap.set("Colorado", 192, "#8BC540");
			G4_Mmap.set("Delaware", 184, "#8BC540");
			G4_Mmap.set("Florida", 199, "#8BC540");
			G4_Mmap.set("Georgia", 189, "#8BC540");
			G4_Mmap.set("Kentucky", 197, "#8BC540");
			G4_Mmap.set("Louisiana", 202, "#8BC540");
			G4_Mmap.set("Maine", 190, "#8BC540");
			G4_Mmap.set("Maryland", 207, "#8BC540");
			G4_Mmap.set("Massachusetts", 192, "#8BC540");
			G4_Mmap.set("Michigan", 194, "#8BC540");
			G4_Mmap.set("Minnesota", 188, "#8BC540");
			G4_Mmap.set("Nebraska", 190, "#8BC540");
			G4_Mmap.set("Nevada", 185, "#8BC540");
			G4_Mmap.set("New Hampshire", 196, "#8BC540");
			G4_Mmap.set("New Jersey", 188, "#8BC540");
			G4_Mmap.set("Oklahoma", 186, "#8BC540");
			G4_Mmap.set("Oregon", 183, "#8BC540");
			G4_Mmap.set("Pennsylvania", 181, "#8BC540");
			G4_Mmap.set("Tennessee", 174, "#8BC540");
			G4_Mmap.set("Wisconsin", 190, "#8BC540");
			G4_Mmap.set("Wyoming", 196, "#8BC540");
			G4_Mmap.set("Washington", 179, "#8BC540");

			G4_Mmap.set("Connecticut", 181, "#ACDB90");
			G4_Mmap.set("District of Columbia", 182, "#ACDB90B");
			G4_Mmap.set("New York", 182, "#ACDB90");
			G4_Mmap.set("Alaska", 154, "#ACDB90");
			G4_Mmap.set("Arizona", 159, "#ACDB90");
			G4_Mmap.set("California", 182, "#ACDB90");
			G4_Mmap.set("Hawaii", 166, "#ACDB90");
			G4_Mmap.set("Idaho", 170, "#ACDB90");
			G4_Mmap.set("Illinois", 174, "#ACDB90");
			G4_Mmap.set("Montana", 174, "#ACDB90");
			G4_Mmap.set("New Mexico", 168, "#ACDB90");
			G4_Mmap.set("Rhode Island", 168, "#ACDB90");
			G4_Mmap.set("South Dakota", 160, "#ACDB90");
			G4_Mmap.set("Utah", 159, "#ACDB90");

			G4_Mmap.set("Mississippi", "&nbsp&#8225", "#A9A4A1");
			G4_Mmap.set("Missouri", "&nbsp&#8225", "#A9A4A1");
			G4_Mmap.set("North Dakota", "&nbsp&#8225", "#A9A4A1");
			G4_Mmap.set("Vermont", "&nbsp&#8225", "#A9A4A1");
			G4_Mmap.set("West Virginia", "&nbsp&#8225", "#A9A4A1");

			$('#resetMap').click(function(e) {
				$("#popup").css('display', 'none');
				$("#Layer_3").css("display", "none");
				$("#Layer_1 .grid.one").attr("fill", "#66B597");
				$("#Layer_1 .grid.two").attr("fill", "#8BC540");
				$("#Layer_1 .grid.three").attr("fill", "#ACDB90");
				$("#Layer_1 .grid.four").attr("fill", "#A9A4A1");
				$("#lineRI").css("display", "none");
				$("#lineCT").css("display", "none");
				$("#showcase-bg").height(PAGE1_HEIGHT_HIDE);

				if (hasClass($('#mapWrapper'), 'open')) {
					removeClass($('#mapWrapper'), 'open');
				}
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});

				if (!hasClass($('#Layer_1'), 'blur')) {
					addClass($('#Layer_1'), 'blur');
				}
			});

			$('#Layer_2 .grid').click(function(e) {
				e.stopPropagation();
				resetMap();

				if (hasClass($('#Layer_1'), 'blur')) {
					removeClass($('#Layer_1'), 'blur');
				}

				//data outside
				if (!hasClass($('#mapWrapper'), 'open')) {
					addClass($('#mapWrapper'), 'open');
				}

				//map all white
				if ($("#Layer_1 .grid.one").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.one").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.two").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.two").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.three").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.three").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.four").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.four").attr("fill", "#FFFFFF");
				}

				//recover the last element
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});

				//add the new element
				//add the new element
				$('.' + $(this).attr('class').replace('grid', '').trim()).each(function(i, item) {
					addClass($(item), 'exploded');
					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("one") > 0) {

						$("#Layer_1 .grid.one").attr("fill", "#66B597");

						$("#Layer_3").css("display", "block");
						$("#Layer_3 .grid.one").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");
						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("two") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.two").attr("fill", "#8BC540");
						$("#Layer_3 .grid.two").css("display", "block");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");

						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("three") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.three").attr("fill", "#ACDB90");
						$("#Layer_3 .grid.three").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");
						$("#lineRI").css("display", "block");
						$("#lineCT").css("display", "block");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("four") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.four").attr("fill", "#A9A4A1");
						$("#Layer_3 .grid.four").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}
				});
			});

			$('.states').click(function(e) {
				if (hasClass($(this), 'exploded')) {
					var state = this.id;
					var number = state + ":&nbsp" + G4_Mmap.get(state);
					$Part_III_Text.html(number);
					var national = "National public average:" + "&nbsp" + G4_Mmap.get("National");
					$Average.html(national);
					var color = $(this).attr("fill");
					$Part_III_Text.css('color', color);
					$("#popup").css('display', 'block');
					$("#showcase-bg").height(PAGE1_HEIGHT_POPUP);
				}
			});
		}

		function resetGrade4MMap() {
			$("#popup").css('display', 'none');
			$("#Layer_3").css("display", "none");
			$("#Layer_1 .grid.one").attr("fill", "#66B597");
			$("#Layer_1 .grid.two").attr("fill", "#8BC540");
			$("#Layer_1 .grid.three").attr("fill", "#ACDB90");
			$("#Layer_1 .grid.four").attr("fill", "#A9A4A1");
			$("#lineRI").css("display", "none");
			$("#lineCT").css("display", "none");

			if (hasClass($('#mapWrapper'), 'open')) {
				removeClass($('#mapWrapper'), 'open');
			}
			$('.exploded').each(function(i, item) {
				removeClass($(item), 'exploded');
			});

			if (!hasClass($('#Layer_1'), 'blur')) {
				addClass($('#Layer_1'), 'blur');
			}
		}

		function attachSvgMapEventThree() {

			resetGrade8RMap();

			var $Part_III_Text = $(pageId + " .Part_III_Text");
			var $Average = $(pageId + " .average");

			var G8_Rmap = new Map();

			//G8 Read
			G8_Rmap.set("National", 225);
			G8_Rmap.set("Arkansas", 225, "#15A6DF");
			G8_Rmap.set("Kentucky", 237, "#15A6DF");
			G8_Rmap.set("Kansas", 245, "#15A6DF");
			G8_Rmap.set("Ohio", 251, "#15A6DF");
			G8_Rmap.set("South Carolina", 242, "#15A6DF");
			G8_Rmap.set("Colorado", 232, "#15A6DF");
			G8_Rmap.set("Virginia", 242, "#15A6DF");
			G8_Rmap.set("DoDEA", 244, "#15A6DF");
			G8_Rmap.set("Wisconsin", 242, "#15A6DF");

			G8_Rmap.set("Connecticut", 222, "#8AC2DB");
			G8_Rmap.set("District of Columbia", 218, "#8AC2DB");
			G8_Rmap.set("Texas", 227, "#8AC2DB");
			G8_Rmap.set("Florida", 226, "#8AC2DB");
			G8_Rmap.set("Indiana", 236, "#8AC2DB");
			G8_Rmap.set("Georgia", 220, "#8AC2DB");
			G8_Rmap.set("Iowa", 226, "#8AC2DB");
			G8_Rmap.set("Massachusetts", 224, "#8AC2DB");
			G8_Rmap.set("Michigan", 232, "#8AC2DB");
			G8_Rmap.set("Minnesota", 231, "#8AC2DB");
			G8_Rmap.set("North Carolina", 232, "#8AC2DB");
			G8_Rmap.set("New Mexico", 224, "#8AC2DB");
			G8_Rmap.set("Oklahoma", 229, "#8AC2DB");
			G8_Rmap.set("Oregon", 218, "#8AC2DB");
			G8_Rmap.set("Pennsylvania", 222, "#8AC2DB");
			G8_Rmap.set("Missouri", 197, "#8AC2DB");
			G8_Rmap.set("Hawaii", 224, "#8AC2DB");
			G8_Rmap.set("Illinois", 219, "#8AC2DB");
			G8_Rmap.set("Washington", 222, "#8AC2DB");
			G8_Rmap.set("Utah", 220, "#8AC2DB");
			G8_Rmap.set("Idaho", 222, "#8AC2DBB");

			G8_Rmap.set("Alaska", 214, "#DDEFF9");
			G8_Rmap.set("California", 220, "#DDEFF9");
			G8_Rmap.set("Nevada", 217, "#DDEFF9");
			G8_Rmap.set("New York", 215, "#DDEFF9");
			G8_Rmap.set("Rhode Island", 216, "#DDEFF9");

			G8_Rmap.set("Delaware", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Montana", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("South Dakota", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Wyoming", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Alabama", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Arizona", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Mississippi", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("North Dakota", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Vermont", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("West Virginia", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Maine", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Nebraska", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("New Hampshire", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("New Jersey", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Tennessee", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Louisiana", "&nbsp&#8225", "#C1BDBB");
			G8_Rmap.set("Maryland", "&nbsp&#8225", "#C1BDBB");

			$('#resetMap').click(function(e) {
				$("#popup").css('display', 'none');
				$("#Layer_3").css("display", "none");
				$("#Layer_1 .grid.one").attr("fill", "#15A6DF");
				$("#Layer_1 .grid.two").attr("fill", "#8AC2DB");
				$("#Layer_1 .grid.three").attr("fill", "#DDEFF9");
				$("#Layer_1 .grid.four").attr("fill", "#C1BDBB");
				$("#lineRI").css("display", "none");
				$("#lineCT").css("display", "none");
				$("#showcase-bg").height(PAGE1_HEIGHT_HIDE);

				if (hasClass($('#mapWrapper'), 'open')) {
					removeClass($('#mapWrapper'), 'open');
				}
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});

				if (!hasClass($('#Layer_1'), 'blur')) {
					addClass($('#Layer_1'), 'blur');
				}
			});

			$('#Layer_2 .grid').click(function(e) {
				e.stopPropagation();
				resetMap();
				if (hasClass($('#Layer_1'), 'blur')) {
					removeClass($('#Layer_1'), 'blur');
				}

				//data outside
				if (!hasClass($('#mapWrapper'), 'open')) {
					addClass($('#mapWrapper'), 'open');
				}

				//map all white
				if ($("#Layer_1 .grid.one").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.one").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.two").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.two").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.three").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.three").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.four").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.four").attr("fill", "#FFFFFF");
				}

				//recover the last element
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});

				//add the new element
				$('.' + $(this).attr('class').replace('grid', '').trim()).each(function(i, item) {
					addClass($(item), 'exploded');
					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("one") > 0) {

						$("#Layer_1 .grid.one").attr("fill", "#15A6DF");

						$("#Layer_3").css("display", "block");
						$("#Layer_3 .grid.one").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");
						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("two") > 0) {

						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.two").attr("fill", "#8AC2DB");
						$("#Layer_3 .grid.two").css("display", "block");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");

						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "block");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("three") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.three").attr("fill", "#DDEFF9");
						$("#Layer_3 .grid.three").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");
						$("#lineRI").css("display", "block");
						$("#lineCT").css("display", "none");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("four") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.four").attr("fill", "#C1BDBB");
						$("#Layer_3 .grid.four").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}
				});
			});

			$('.states').click(function(e) {
				if (hasClass($(this), 'exploded')) {
					var state = this.id;
					var national = "National public average:" + "&nbsp" + G8_Rmap.get("National");
					$Average.html(national);
					var number = state + ":&nbsp" + G8_Rmap.get(state);
					$Part_III_Text.html(number);
					$Average.html(national);
					var color = $(this).attr("fill");
					$Part_III_Text.css('color', color);
					$("#popup").css('display', 'block');
					$("#showcase-bg").height(PAGE1_HEIGHT_POPUP);
				}
			});
		}

		function resetGrade8RMap() {
			$("#popup").css('display', 'none');
			$("#Layer_3").css("display", "none");
			$("#Layer_1 .grid.one").attr("fill", "#15A6DF");
			$("#Layer_1 .grid.two").attr("fill", "#8AC2DB");
			$("#Layer_1 .grid.three").attr("fill", "#DDEFF9");
			$("#Layer_1 .grid.four").attr("fill", "#C1BDBB");
			$("#lineRI").css("display", "none");
			$("#lineCT").css("display", "none");
			$("#showcase-bg").height(PAGE1_HEIGHT_HIDE);

			if (hasClass($('#mapWrapper'), 'open')) {
				removeClass($('#mapWrapper'), 'open');
			}
			$('.exploded').each(function(i, item) {
				removeClass($(item), 'exploded');
			});

			if (!hasClass($('#Layer_1'), 'blur')) {
				addClass($('#Layer_1'), 'blur');
			}
		}

		function attachSvgMapEventFour() {

			resetGrade8MMap();

			var $Part_III_Text = $(pageId + " .Part_III_Text");
			var $Average = $(pageId + " .average");
			var G8_Mmap = new Map();

			//G8 Math
			G8_Mmap.set("National", 245);
			G8_Mmap.set("Arkansas", 265, "#66B597");
			G8_Mmap.set("Kansas", 262, "#66B597");
			G8_Mmap.set("North Carolina", 255, "#66B597");
			G8_Mmap.set("South Carolina", 271, "#66B597");
			G8_Mmap.set("Texas", 260, "#66B597");
			G8_Mmap.set("Virginia", 261, "#66B597");
			G8_Mmap.set("Wisconsin", 260, "#66B597");
			G8_Mmap.set("DoDEA", 265, "#66B597");

			G8_Mmap.set("Maryland", 207, "#8BC540");
			G8_Mmap.set("Ohio", 205, "#8BC540");
			G8_Mmap.set("Florida", 243, "#8BC540");
			G8_Mmap.set("Colorado", 248, "#8BC540");
			G8_Mmap.set("District of Columbia", 237, "#8BC540");
			G8_Mmap.set("Georgia", 239, "#8BC540");
			G8_Mmap.set("Iowa", 246, "#8BC540");
			G8_Mmap.set("Kentucky", 243, "#8BC540");
			G8_Mmap.set("Massachusetts", 249, "#8BC540");
			G8_Mmap.set("Michigan", 240, "#8BC540");
			G8_Mmap.set("Minnesota", 256, "#8BC540");
			G8_Mmap.set("Nebraska", 246, "#8BC540");
			G8_Mmap.set("New Mexico", 243, "#8BC540");
			G8_Mmap.set("New York", 241, "#8BC540");
			G8_Mmap.set("Oklahoma", 186, "#8BC540");
			G8_Mmap.set("Pennsylvania", 181, "#8BC540");
			G8_Mmap.set("Washington", 249, "#8BC540");
			G8_Mmap.set("Idaho", 239, "#8BC540");
			G8_Mmap.set("South Dakota", 241, "#8BC540");
			G8_Mmap.set("Illinois", 241, "#8BC540");
			G8_Mmap.set("Hawaii", 251, "#8BC540");

			G8_Mmap.set("Alaska", 237, "#ACDB90");
			G8_Mmap.set("California", 235, "#ACDB90");
			G8_Mmap.set("Connecticut", 223, "#ACDB90");
			G8_Mmap.set("Nevada", 236, "#ACDB90");
			G8_Mmap.set("Oregon", 231, "#ACDB90");
			G8_Mmap.set("Rhode Island", 232, "#ACDB90");
			G8_Mmap.set("Utah", 230, "#ACDB90");

			G8_Mmap.set("Delaware", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Indiana", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Wyoming", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Alabama", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Louisiana", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Maine", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Mississippi", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Montana", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Missouri", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("New Hampshire", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("New Jersey", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Tennessee", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("North Dakota", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Vermont", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("West Virginia", "&nbsp&#8225", "#8AC2DB");
			G8_Mmap.set("Arizona", "&nbsp&#8225", "#8AC2DB");

			$('#resetMap').click(function(e) {
				$("#popup").css('display', 'none');
				$("#Layer_3").css("display", "none");
				$("#Layer_1 .grid.one").attr("fill", "#66B597");
				$("#Layer_1 .grid.two").attr("fill", "#8BC540");
				$("#Layer_1 .grid.three").attr("fill", "#ACDB90");
				$("#Layer_1 .grid.four").attr("fill", "#A9A4A1");
				$("#lineRI").css("display", "none");
				$("#lineCT").css("display", "none");
				$("#showcase-bg").height(PAGE1_HEIGHT_HIDE);

				if (hasClass($('#mapWrapper'), 'open')) {
					removeClass($('#mapWrapper'), 'open');
				}
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});

				if (!hasClass($('#Layer_1'), 'blur')) {
					addClass($('#Layer_1'), 'blur');
				}
			});

			$('#Layer_2 .grid').click(function(e) {
				e.stopPropagation();
				resetMap();
				if (hasClass($('#Layer_1'), 'blur')) {
					removeClass($('#Layer_1'), 'blur');
				}

				//data outside
				if (!hasClass($('#mapWrapper'), 'open')) {
					addClass($('#mapWrapper'), 'open');
				}

				//map all white
				if ($("#Layer_1 .grid.one").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.one").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.two").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.two").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.three").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.three").attr("fill", "#FFFFFF");
				}

				if ($("#Layer_1 .grid.four").attr('fill') !== "#FFFFFF") {
					$("#Layer_1 .grid.four").attr("fill", "#FFFFFF");
				}

				//recover the last element
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});

				//add the new element
				$('.' + $(this).attr('class').replace('grid', '').trim()).each(function(i, item) {
					addClass($(item), 'exploded');
					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("one") > 0) {

						$("#Layer_1 .grid.one").attr("fill", "#66B597");

						$("#Layer_3").css("display", "block");
						$("#Layer_3 .grid.one").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");
						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("two") > 0) {

						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.two").attr("fill", "#8BC540");
						$("#Layer_3 .grid.two").css("display", "block");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");

						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("three") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.three").attr("fill", "#ACDB90");
						$("#Layer_3 .grid.three").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#Layer_3 .grid.four").css("display", "none");
						$("#lineRI").css("display", "block");
						$("#lineCT").css("display", "block");
					}

					if (('.' + $(this).attr('class').replace('grid', '').trim()).indexOf("four") > 0) {
						$("#Layer_3").css("display", "block");
						$("#Layer_1 .grid.four").attr("fill", "#A9A4A1");
						$("#Layer_3 .grid.four").css("display", "block");
						$("#Layer_3 .grid.two").css("display", "none");
						$("#Layer_3 .grid.three").css("display", "none");
						$("#Layer_3 .grid.one").css("display", "none");
						$("#lineRI").css("display", "none");
						$("#lineCT").css("display", "none");
					}
				});
			});

			$('.states').click(function(e) {
				if (hasClass($(this), 'exploded')) {
					var state = this.id;
					var national = "National public average:" + "&nbsp" + G8_Mmap.get("National");
					var number = state + ":&nbsp" + G8_Mmap.get(state);
					$Part_III_Text.html(number);
					$Average.html(national);
					var color = $(this).attr("fill");
					$Part_III_Text.css('color', color);
					$("#popup").css('display', 'block');
					$("#showcase-bg").height(PAGE1_HEIGHT_POPUP);
				}
			});
		}

		function resetGrade8MMap() {
			$("#popup").css('display', 'none');
			$("#Layer_3").css("display", "none");
			$("#Layer_1 .grid.one").attr("fill", "#66B597");
			$("#Layer_1 .grid.two").attr("fill", "#8BC540");
			$("#Layer_1 .grid.three").attr("fill", "#ACDB90");
			$("#Layer_1 .grid.four").attr("fill", "#A9A4A1");
			$("#lineRI").css("display", "none");
			$("#lineCT").css("display", "none");

			if (hasClass($('#mapWrapper'), 'open')) {
				removeClass($('#mapWrapper'), 'open');
			}
			$('.exploded').each(function(i, item) {
				removeClass($(item), 'exploded');
			});

			if (!hasClass($('#Layer_1'), 'blur')) {
				addClass($('#Layer_1'), 'blur');
			}
		}

		function resetMap() {
			$("#popup").css('display', 'none');
		}

	}

	function initEthnicity() {
		var pageId = "#image_3";
		initData();
		function initData() {
			var $Part_I_Title1 = $(pageId + " .Part_I_Title1");
			var $Part_I_Title2 = $(pageId + " .Part_I_Title2");

			var $Part_I_Text = $(pageId + " .Part_I_Text");
			var $Part_I_Img1 = $(pageId + " .Part_I_Img1");
			var $Part_I_Img2 = $(pageId + " .Part_I_Img2");

			var $Part_II_Title = $(pageId + " .Part_II_Title");
			var $Part_II_Note = $(pageId + " .Part_II_Note");
			var $Part_II_Text = $(pageId + " .Part_II_Text");
			var $Part_II_Img = $(pageId + " .Part_II_Img");

			var Part_I_Title1 = {};
			var Part_I_Title2 = {};
			var Part_I_Text = {};
			var Part_I_Img1 = {};
			var Part_I_Img2 = {};
			var Part_II_Title = {};
			var Part_II_Note = {};
			var Part_II_Text = {};
			var Part_II_Img = {};

			//Part_I Title1
			Part_I_Title1['G4_R'] = 'Percentage of public school students in grade 4 NAEP reading, by race/ethnicity and status as English language learners: 2013';
			Part_I_Title1['G4_M'] = 'Percentage of public school students in grade 4 NAEP mathematics, by race/ethnicity and status as English language learners: 2013';
			Part_I_Title1['G8_R'] = 'Percentage of public school students in grade 8 NAEP reading, by race/ethnicity and status as English language learners: 2013';
			Part_I_Title1['G8_M'] = 'Percentage of public school students in grade 8 NAEP mathematics, by race/ethnicity and status as English language learners: 2013';

			//Part_I Title2
			Part_I_Title2['G4_R'] = 'Percentage of public school students in grade 4 NAEP reading, by race/ethnicity and status as non-English language learners: 2013';
			Part_I_Title2['G4_M'] = 'Percentage of public school students in grade 4 NAEP mathematics, by race/ethnicity and status as non-English language learners: 2013';
			Part_I_Title2['G8_R'] = 'Percentage of public school students in grade 8 NAEP reading, by race/ethnicity and status as non-English language learners: 2013';
			Part_I_Title2['G8_M'] = 'Percentage of public school students in grade 8 NAEP mathematics, by race/ethnicity and status as non-English language learners: 2013';

			//Part_I Text
			Part_I_Text['G4_R'] = 'In 2013, a higher percentage of ELL students were Hispanic (<span class="highlighted">81%</span>) compared to non-ELL students (<span class="highlighted">18%</span>) in the nation.';
			Part_I_Text['G4_M'] = 'In 2013, a higher percentage of ELL students were Hispanic (<span class="highlighted">82%</span>) compared to non-ELL students (<span class="highlighted">18%</span>) in the nation.';
			Part_I_Text['G8_R'] = 'In 2013, a higher percentage of ELL students were Hispanic (<span class="highlighted2">79%</span>) compared to non-ELL students (<span class="highlighted2">20%</span>) in the nation.';
			Part_I_Text['G8_M'] = 'In 2013, a higher percentage of ELL students were Hispanic (<span class="highlighted2">78%</span>) compared to non-ELL students (<span class="highlighted2">21%</span>) in the nation.';

			//Part_I Image1
			Part_I_Img1['G4_R'] = 'Grade4_Reading_Perc.svg';
			Part_I_Img1['G4_M'] = 'Grade4_Mathematics_Perc.svg';
			Part_I_Img1['G8_R'] = 'Grade8_Reading_Perc.svg';
			Part_I_Img1['G8_M'] = 'Grade8_Mathematics_Perc.svg';

			//Part_I Image2
			Part_I_Img2['G4_R'] = 'Grade4_Reading_Perc_nonELL.svg';
			Part_I_Img2['G4_M'] = 'Grade4_Mathematics_Perc_nonELL.svg';
			Part_I_Img2['G8_R'] = 'Grade8_Reading_Perc_nonELL.svg';
			Part_I_Img2['G8_M'] = 'Grade8_Mathematics_Perc_nonELL.svg';

			//Part_II Title
			Part_II_Title['G4_R'] = 'Change in grade 4 NAEP reading average scores and score gaps, by status as English language learners and race/ethnicity: 1998, 2011, and 2013';
			Part_II_Title['G4_M'] = 'Change in grade 4 NAEP mathematics average scores and score gaps, by status as English language learners and race/ethnicity: 1996, 2011, and 2013';
			Part_II_Title['G8_R'] = 'Change in grade 8 NAEP reading average scores and score gaps, by status as English language learners and race/ethnicity: 1998, 2011, and 2013';
			Part_II_Title['G8_M'] = 'Change in grade 8 NAEP mathematics average scores and score gaps, by status as English language learners and race/ethnicity: 1996, 2011, and 2013';

			//Part_II Text
			Part_II_Text['G4_R'] = '<br />Scores for Hispanic ELL students in grade 4 <span class="highlighted">increased by 19 points</span> from 1998 to 2013, keeping pace with the 18-point increase of non-ELL Hispanic students. The size of the gap between ELL and non-ELL Hispanic students did not change.';
			Part_II_Text['G4_M'] = '<br />Scores for Hispanic ELL students in grade 4 <span class="highlighted">increased by 20 points</span> from 1996 to 2013, keeping pace with the 26-point increase of non-ELL Hispanic students. The size of the gap between ELL and non-ELL Hispanic students did not change.';
			Part_II_Text['G8_R'] = '<br />Scores for Hispanic ELL students in grade 8 <span class="highlighted2">increased by 9 points</span> from 1998 to 2013, keeping pace with the 15-point increase of non-ELL Hispanic students. The size of the gap between ELL and non-ELL Hispanic students did not change.';
			Part_II_Text['G8_M'] = '<br />Scores for Hispanic ELL students in grade 8 <span class="highlighted2">increased by 19 points</span> from 1996 to 2013, keeping pace with the 21-point increase of non-ELL Hispanic students. The size of the gap between ELL and non-ELL Hispanic students did not change.';

			//Part_II_Img
			Part_II_Img['G4_R'] = 'Grade4_Reading_Gaps.png';
			Part_II_Img['G4_M'] = 'Grade4_Mathematics_Gaps.png';
			Part_II_Img['G8_R'] = 'Grade8_Reading_Gaps.png';
			Part_II_Img['G8_M'] = 'Grade8_Mathematics_Gaps.png';

			$(pageId + ' .grade-sel').change(function(e) {
				reset();
				var value = $(this).val();
				setContents(value);
			});
			function setContents(grade_subject) {
				var path = '/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/Images/grade_subject/Ethnicity/';
				switch (parseInt(grade_subject)) {
				case 40:
					$Part_II_Title.html(Part_II_Title['G4_R']);
					$Part_II_Note.html(Part_II_Note['G4_R']);
					$Part_II_Text.html(Part_II_Text['G4_R']);
					$Part_II_Img.attr('src', path + Part_II_Img['G4_R']);
					break;
				case 41:
					// $Part_I_Title1.html(Part_I_Title1['G4_M']);
					// $Part_I_Title2.html(Part_I_Title2['G4_M']);
					// $Part_I_Text.html(Part_I_Text['G4_M']);
					// $Part_I_Img1.load(path + Part_I_Img1['G4_M'], addSVGEventOne);
					// $Part_I_Img2.load(path + Part_I_Img2['G4_M'], addSVGEventTwo);
					$Part_II_Title.html(Part_II_Title['G4_M']);
					$Part_II_Note.html(Part_II_Note['G4_M']);
					$Part_II_Text.html(Part_II_Text['G4_M']);
					$Part_II_Img.attr('src', path + Part_II_Img['G4_M']);
					break;
				case 42:
					$Part_I_Title1.html(Part_I_Title1['G4_R']);
					$Part_I_Title2.html(Part_I_Title2['G4_R']);
					$Part_I_Text.html(Part_I_Text['G4_R']);
					$Part_I_Img1.load(path + Part_I_Img1['G4_R'], addSVGEventOne);
					$Part_I_Img2.load(path + Part_I_Img2['G4_R'], addSVGEventTwo);
					$Part_II_Title.html(Part_II_Title['G4_R']);
					$Part_II_Note.html(Part_II_Note['G4_R']);
					$Part_II_Text.html(Part_II_Text['G4_R']);
					$Part_II_Img.attr('src', path + Part_II_Img['G4_R']);
					break;
				case 80:
					$Part_II_Title.html(Part_II_Title['G8_R']);
					$Part_II_Note.html(Part_II_Note['G8_R']);
					$Part_II_Text.html(Part_II_Text['G8_R']);
					$Part_II_Img.attr('src', path + Part_II_Img['G8_R']);
					break;
				case 81:
					// $Part_I_Title1.html(Part_I_Title1['G8_M']);
					// $Part_I_Title2.html(Part_I_Title2['G8_M']);
					// $Part_I_Text.html(Part_I_Text['G8_M']);
					// $Part_I_Img1.load(path + Part_I_Img1['G8_M'], addSVGEventOne);
					// $Part_I_Img2.load(path + Part_I_Img2['G8_M'], addSVGEventTwo);
					$Part_II_Title.html(Part_II_Title['G8_M']);
					$Part_II_Note.html(Part_II_Note['G8_M']);
					$Part_II_Text.html(Part_II_Text['G8_M']);
					$Part_II_Img.attr('src', path + Part_II_Img['G8_M']);
					break;
				case 82:
					$Part_I_Title1.html(Part_I_Title1['G8_R']);
					$Part_I_Title2.html(Part_I_Title2['G8_R']);
					$Part_I_Text.html(Part_I_Text['G8_R']);
					$Part_I_Img1.load(path + Part_I_Img1['G8_R'], addSVGEventOne);
					$Part_I_Img2.load(path + Part_I_Img2['G8_R'], addSVGEventTwo);
					$Part_II_Title.html(Part_II_Title['G8_R']);
					$Part_II_Note.html(Part_II_Note['G8_R']);
					$Part_II_Text.html(Part_II_Text['G8_R']);
					$Part_II_Img.attr('src', path + Part_II_Img['G8_R']);
					break;
				default:
					break;
				}
			}

			setContents($(pageId + ' .grade-sel').val());
		}

		//open the all,remove the all
		$('.showAll').click(function(e) {
			if (hasClass($('#donutWrapper'), 'open')) {
				removeClass($('#donutWrapper'), 'open');
			}
			$('.exploded').each(function(i, item) {
				removeClass($(item), 'exploded');
			});
		});
		function addSVGEventOne() {
			$('.Part_I_Img1 .pie').click(function(e) {
				e.stopPropagation();
				//make sure the other pies are blur
				if (!hasClass($('#donutWrapper'), 'open')) {
					addClass($('#donutWrapper'), 'open');
				}
				//find the last exploded class, let it become normal
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});
				//click the specific pie to explode it
				$('.' + $(this).attr('class').replace('pie', '').trim()).each(function(i, item) {
					addClass($(item), 'exploded');
				});
			});
		}

		function addSVGEventTwo() {
			$('.Part_I_Img2 .pie').click(function(e) {
				e.stopPropagation();

				if (!hasClass($('#donutWrapper'), 'open')) {
					addClass($('#donutWrapper'), 'open');
				}
				$('.exploded').each(function(i, item) {
					removeClass($(item), 'exploded');
				});
				$('.' + $(this).attr('class').replace('pie', '').trim()).each(function(i, item) {
					addClass($(item), 'exploded');
				});

			});
		}

	}

	function initPlaces() {
		$(document).ready(function() {
			var pageId = "#image_4";
			initData();
			function initData() {
				var $Part_I_Title1 = $(pageId + " .Part_I_Title1");
				var $Part_I_Title2 = $(pageId + " .Part_I_Title2");

				var $Part_I_Img1 = $(pageId + " .Part_I_Img1");
				var $Part_I_Img2 = $(pageId + " .Part_I_Img2");
				//var $Part_II = $(pageId + " .Part_II");

				var $Part_I_Text1 = $(pageId + " .Part_I_Text1");
				var $Part_I_Text2 = $(pageId + " .Part_I_Text2");

				var $Part_II_Title = $(pageId + " .Part_II_Title");
				var $Part_II_Img = $(pageId + " .Part_II_Img");
				var $Part_II_Text = $(pageId + " .Part_II_Text");

				var Part_I_Title1 = {};
				var Part_I_Title2 = {};

				var Part_I_Img1 = {};
				var Part_I_Img2 = {};

				var Part_I_Text1 = {};
				var Part_I_Text2 = {};

				var Part_II_Title = {};
				var Part_II_Img = {};
				var Part_II_Text = {};

				//Title
				Part_I_Title1['G4_R'] = 'Percentage of grade 4 public school students who are <br /> identified as English language learner, by region: 2013';
				Part_I_Title1['G8_R'] = 'Percentage of grade 8 public school students who are <br /> identified as English language learner, by region: 2013';
				Part_I_Title2['G4_R'] = 'Percentage of grade 4 public school students who are <br /> identified as English language learner, by locale: 2013';
				Part_I_Title2['G8_R'] = 'Percentage of grade 8 public school students who are <br /> identified as English language learner, by locale: 2013';
				Part_II_Title['G4_R'] = 'Percentage of grade 4 public school students who are identified as English language learner, by state/jurisdiction: 2013';
				Part_II_Title['G8_R'] = 'Percentage of grade 8 public school students who are identified as English language learner, by state/jurisdiction: 2013';

				//image
				Part_I_Img1['G4_R'] = 'Grade4_Reading_Region.png';
				// Part_Img['G4_M'] = 'Grade4_Mathematics.png';
				Part_I_Img1['G8_R'] = 'Grade8_Reading_Region.png';

				// Part_Img['G8_M'] = 'Grade8_Mathematics.png';
				Part_I_Img2['G4_R'] = 'Grade4_Reading_Locale.png';
				Part_I_Img2['G8_R'] = 'Grade8_Reading_Locale.png';

				Part_II_Img['G4_R'] = 'Grade4_Reading.png';
				Part_II_Img['G8_R'] = 'Grade8_Reading.png';

				//Part_Text_I text
				Part_I_Text1['G4_R'] = 'Eight percent of ELL students live in the Northeast, <br /> 13 percent in the Midwest, 36 percent in the South, <br /> and 43 percent in the West.';
				// Part_I_Text['G4_M'] = 'In 2013, ELL students in <span class="highlighted">10 states</span> scored above the national average for 4th-grade mathematics (219), while students in <span class="highlighted">13 states</span> scored significantly below the national average. Five states had insufficient data to permit a reliable estimate.';
				Part_I_Text1['G8_R'] = 'Thirteen percent of ELL students live in the Northeast,<br /> 14 percent in the Midwest, 30 percent in the South, <br /> and 43 percent in the West.';
				// Part_I_Text['G8_M'] = 'In 2013, ELL students in <span class="highlighted2">8 states</span> scored above the national average for 8th-grade mathematics (245), while students in <span class="highlighted2">7 states</span> scored significantly below the national average. Sixteen states had insufficient data to permit a reliable estimate.';

				//Part_Text_II text
				Part_I_Text2['G4_R'] = 'Forty-six percent of ELL student&#39;s schools are <br /> in cities, 36 percent in suburban areas, 7 percent <br /> in towns,  and 12 percent in rural areas.';
				// Part_II_Text2['G4_M'] = 'The percentage of ELL students who live in the West is greater (<span class="highlighted">41%</span>) than the percentage of non-ELL students (<span class="highlighted">22%</span>). A greater percentage of ELL students live in cities (<span class="highlighted">47%</span>) than non-ELL students (<span class="highlighted">28%</span>).';
				Part_I_Text2['G8_R'] = 'Forty-six percent of ELL student&#39;s schools are in cities,<br /> 33 percent in suburban areas, 11 percent <br /> in towns, and 10 percent in rural areas.';
				// Part_II_Text2['G8_M'] = 'The percentage of ELL students who live in the West is greater (<span class="highlighted2">43%</span>) than the percentage of non-ELL students (<span class="highlighted2">24%</span>). A greater percentage of ELL students live in cities (<span class="highlighted2">46%</span>) than non-ELL students (<span class="highlighted2">27%</span>).';

				$(pageId + ' .grade-sel').change(function(e) {
					var value = $(this).val();
					setContents(value);
				});
				function setContents(grade_subject) {
					var path = '/sites/cf/Resources/NCES%20NAEP/subject/studies/ELL/Images/grade_subject/Places/';
					switch (parseInt(grade_subject)) {
					case 40:
						$Part_I_Title1.html(Part_I_Title1['G4_R']);
						$Part_I_Title2.html(Part_I_Title2['G4_R']);
						$Part_I_Img1.attr('src', path + Part_I_Img1['G4_R']);
						$Part_I_Img2.attr('src', path + Part_I_Img2['G4_R']);
						$Part_I_Text1.html(Part_I_Text1['G4_R']);
						$Part_I_Text2.html(Part_I_Text2['G4_R']);
						$Part_II_Img.attr('src', path + Part_II_Img['G4_R']);
						$Part_II_Title.html(Part_II_Title['G4_R']);
						break;
					// case 41:
					// $Part_Title.html(Part_Title['G4_M']);
					// $Part_Img.attr('src', path + Part_Img['G4_M']);
					// $Part_Text_I.html(Part_Text_I['G4_M']);
					// $Part_Text_II.html(Part_Text_II['G4_M']);
					// break;
					case 80:
						$Part_I_Title1.html(Part_I_Title1['G8_R']);
						$Part_I_Title2.html(Part_I_Title2['G8_R']);
						$Part_I_Img1.attr('src', path + Part_I_Img1['G8_R']);
						$Part_I_Img2.attr('src', path + Part_I_Img2['G8_R']);
						$Part_I_Text1.html(Part_I_Text1['G8_R']);
						$Part_I_Text2.html(Part_I_Text2['G8_R']);
						$Part_II_Img.attr('src', path + Part_II_Img['G8_R']);
						$Part_II_Title.html(Part_II_Title['G8_R']);
						break;
					// case 81:
					// $Part_Title.html(Part_Title['G8_M']);
					// $Part_Img.attr('src', path + Part_Img['G8_M']);
					// $Part_Text_I.html(Part_Text_I['G8_M']);
					// $Part_Text_II.html(Part_Text_II['G8_M']);
					// break;
					default:
						break;
					}
				}

				setContents($(pageId + ' .grade-sel').val());
			}

		});
	}

	function hasClass($elem, cls) {
		return $('<b></b>').addClass($elem.attr('class')).hasClass(cls);
	}

	//
	function addClass($elem, cls) {
		$elem.attr('class', $elem.attr('class') + ' ' + cls);
	}

	//
	function removeClass($elem, cls) {
		$elem.attr('class', $elem.attr('class').replace(cls, ''));
	}

}